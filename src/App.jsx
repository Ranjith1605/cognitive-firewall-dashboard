import React, { useState, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MetricPanel from './components/MetricPanel';
import TrendChart from './components/TrendChart';
import InsightBox from './components/InsightBox';
import CognitiveGauge from './components/CognitiveGauge';
import AnalyticsView from './components/AnalyticsView';
import SettingsView from './components/SettingsView';
import { useDataLoader, computePillarScores, getDynamicRecommendation } from './data/useDataLoader';

// ─── Loading Screen ────────────────────────────────────────────────────────────
const LoadingScreen = () => (
  <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-[#FFFEF9]">
    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyber-green flex items-center justify-center shadow-xl shadow-emerald-500/20 animate-pulse">
      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>
    <div className="text-center">
      <p className="text-sm font-black text-slate-800 uppercase tracking-widest">Loading Telemetry</p>
      <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-tight">Fetching behavioral data...</p>
    </div>
  </div>
);

// ─── Error Screen ──────────────────────────────────────────────────────────────
const ErrorScreen = ({ message }) => (
  <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[#FFFEF9]">
    <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center">
      <svg className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      </svg>
    </div>
    <div className="text-center">
      <p className="text-sm font-black text-slate-800 uppercase tracking-widest">Data Unavailable</p>
      <p className="text-xs font-bold text-red-400 mt-1 max-w-sm">{message}</p>
    </div>
  </div>
);

// ─── Main App ──────────────────────────────────────────────────────────────────
const App = () => {
  const { data, loading, error } = useDataLoader();
  const [activeView, setActiveView] = useState('dashboard');
  const [selectedDay, setSelectedDay] = useState(null);

  // Sync selectedDay to first available day once data loads
  const effectiveDay = useMemo(() => {
    if (!data) return null;
    if (selectedDay && data.selected_days.includes(selectedDay)) return selectedDay;
    return data.selected_days[0];
  }, [data, selectedDay]);

  const dayData = useMemo(() => data?.by_day[effectiveDay], [data, effectiveDay]);
  const hourlyData = useMemo(() => data?.hourly_breakdown_by_day[effectiveDay] ?? [], [data, effectiveDay]);

  const pillarScores = useMemo(() => {
    if (!dayData) return { attentionFragmentation: 0, interactionEffort: 0, contextPressure: 0 };
    return computePillarScores(dayData, hourlyData);
  }, [dayData, hourlyData]);

  if (loading) return <LoadingScreen />;
  if (error) return <ErrorScreen message={error} />;
  if (!data || !dayData) return <ErrorScreen message="No data available." />;

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return (
          <>
            {/* Hero Section */}
            <div className="flex items-stretch gap-8 mt-4 mb-6">
              <div className="bg-golden-white rounded-2xl border border-slate-200 shadow-sm p-6 flex items-center gap-8 w-fit text-slate-800">
                <CognitiveGauge score={Math.round(dayData.daily_cognitive_score * 100)} size={140} />
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Daily Status</p>
                  <p className="text-3xl font-black text-slate-800 uppercase tracking-tight">
                    {dayData.daily_cognitive_load_label}
                  </p>
                  <div className="mt-2 text-[10px] font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full w-fit uppercase tracking-tight">
                    Based on 24h telemetry
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <InsightBox recommendation={getDynamicRecommendation(dayData, hourlyData)} />
              </div>
            </div>

            {/* 3 Pillars + Decision Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <MetricPanel
                title="1. Attention Fragmentation"
                type="stats"
                stats={[
                  { label: 'Tab switches / day', value: dayData.avg_tab_switches_per_day?.toFixed(1), unit: '' },
                  { label: 'Total interruptions', value: dayData.total_interruptions_per_day, unit: '' },
                  { label: 'Re-visited pages', value: dayData.revisited_pages_per_day, unit: '' }
                ]}
              />
              <MetricPanel
                title="2. Interaction Effort"
                type="stats"
                stats={[
                  { label: 'Interruption lag', value: dayData.avg_interruption_lag_min_per_day?.toFixed(2), unit: 'min' },
                  { label: 'AF Score (avg)', value: (pillarScores.interactionEffort * 100).toFixed(0), unit: '%' },
                  { label: 'Flow quality', value: pillarScores.interactionEffort < 0.3 ? 'Smooth' : pillarScores.interactionEffort < 0.6 ? 'Moderate' : 'Strained', unit: '' }
                ]}
              />
              <MetricPanel
                title="3. Context Pressure"
                type="stats"
                stats={[
                  { label: 'Open Tabs (avg)', value: dayData.avg_open_tabs?.toFixed(1), unit: 'tabs' },
                  { label: 'Notifications', value: dayData.browser_notifications_total, unit: '' },
                  { label: 'Meeting Time', value: dayData.meeting_minutes_total, unit: 'min' }
                ]}
              />
              <MetricPanel
                title="4. Decision Highlights"
                type="stats"
                stats={[
                  { label: 'Clear Decisions', value: dayData.best_moment_of_day, unit: '' },
                  { label: 'More Hesitation', value: dayData.worst_moment_of_day, unit: '' },
                  { label: 'Cognitive Rhythm', value: dayData.daily_cognitive_score < 0.3 ? 'Stable' : 'Variant', unit: '' }
                ]}
              />
            </div>

            {/* Trend Chart */}
            <div className="mb-8">
              <TrendChart data={hourlyData} />
            </div>
          </>
        );
      case 'analytics':
        return <AnalyticsView dayData={dayData} hourlyData={hourlyData} pillarScores={pillarScores} />;
      case 'settings':
        return <SettingsView />;
      default:
        return (
          <div className="flex flex-col items-center justify-center py-32 text-slate-300 border-2 border-dashed border-slate-200 rounded-3xl">
            <h2 className="text-2xl font-black uppercase tracking-widest">{activeView}</h2>
            <p className="font-bold text-sm mt-2 uppercase tracking-tight">Coming soon...</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-slate-900 font-outfit selection:bg-cyber-green/20">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />

      <div style={{ marginLeft: '88px', padding: '24px 40px' }} className="max-w-[1500px] mx-auto">
        <Header
          selectedDay={effectiveDay}
          setSelectedDay={setSelectedDay}
          days={data.selected_days}
          weeklyLabels={data.daily_cognitive_load_labels_ordered}
          status={dayData.daily_cognitive_load_label}
          activeView={activeView}
        />

        <main className="min-h-[70vh]">
          {renderView()}
        </main>

        <footer className="border-t border-slate-200 py-8 flex justify-between items-center text-[11px] text-slate-400 font-bold uppercase tracking-wider">
          <div className="flex items-center gap-6">
            <span>Is this helpful?</span>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-white hover:border-cyber-green hover:text-cyber-green transition-all">👍</button>
              <button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-white hover:border-overload hover:text-overload transition-all">👎</button>
            </div>
          </div>
          <div className="flex gap-10">
            <span className="text-slate-300">User: {data.user_id}</span>
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
