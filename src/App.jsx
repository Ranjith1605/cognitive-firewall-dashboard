import React, { useState, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MetricPanel from './components/MetricPanel';
import TrendChart from './components/TrendChart';
import InsightBox from './components/InsightBox';
import CognitiveGauge from './components/CognitiveGauge';
import SecurityView from './components/SecurityView';
import AnalyticsView from './components/AnalyticsView';
import DeepFocusView from './components/DeepFocusView';
import SettingsView from './components/SettingsView';
import AlertsHistoryView from './components/AlertsHistoryView';
import ProfileView from './components/ProfileView';
import LoginView from './components/LoginView';
import { FOCUSED_DATA, FRAGMENTED_DATA } from './data/realData';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeView, setActiveView] = useState('dashboard');
  const [isFocused, setIsFocused] = useState(true);
  const data = isFocused ? FOCUSED_DATA : FRAGMENTED_DATA;

  const [selectedDay, setSelectedDay] = useState(data.selected_days[0]);

  const dayData = useMemo(() => data.by_day[selectedDay], [data, selectedDay]);
  const hourlyData = useMemo(() => data.hourly_breakdown_by_day[selectedDay], [data, selectedDay]);

  const handlePersonaToggle = () => {
    setIsFocused(!isFocused);
    const newData = !isFocused ? FOCUSED_DATA : FRAGMENTED_DATA;
    if (!newData.selected_days.includes(selectedDay)) {
      setSelectedDay(newData.selected_days[0]);
    }
  };

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return (
          <>
            {/* Hero Section with Score */}
            <div className="flex items-start gap-8 mt-4 mb-4">
              <div className="bg-golden-white rounded-2xl border border-slate-200 shadow-sm p-6 flex items-center gap-8 w-fit text-slate-800">
                <CognitiveGauge score={Math.round(dayData.daily_cognitive_score * 100)} size={140} />
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Daily Score</p>
                  <p className="text-3xl font-black text-slate-800 tabular-nums">
                    {Math.round(dayData.daily_cognitive_score * 100)}
                    <span className="text-sm font-bold text-slate-300 ml-1">/100</span>
                  </p>
                  <div className="mt-2 text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full w-fit">
                    Composite result
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <InsightBox recommendation={dayData.one_thing_to_try} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <MetricPanel
                title="1. Cognitive Load Breakdown"
                type="timeline"
                data={hourlyData.filter(h => h.sentence !== "Break detected" && h.sentence !== "-").slice(0, 5)}
              />
              <MetricPanel
                title="2. Attention & Focus"
                type="stats"
                stats={[
                  { label: 'Avg tab switches', value: dayData.avg_tab_switches_per_day, unit: '' },
                  { label: 'Avg interruption lag', value: dayData.avg_interruption_lag_min_per_day, unit: 'min' },
                  { label: 'Total interruptions', value: dayData.total_interruptions_per_day, unit: '' }
                ]}
              />
              <MetricPanel
                title="3. Decision Patterns"
                type="stats"
                stats={[
                  { label: 'Re-visited pages', value: dayData.revisited_pages_per_day, unit: '' },
                  { label: 'Best moment', value: dayData.best_moment_of_day, unit: '' },
                  { label: 'Worst moment', value: dayData.worst_moment_of_day, unit: '' }
                ]}
              />
              <MetricPanel
                title="4. Digital Environment"
                type="stats"
                stats={[
                  { label: 'Notifications', value: dayData.browser_notifications_total, unit: '' },
                  { label: 'Meeting Quantity', value: dayData.meeting_minutes_total, unit: 'min' },
                  { label: 'Open Tabs', value: Math.round(dayData.avg_open_tabs), unit: '' }
                ]}
              />
            </div>

            <div className="mb-8">
              <TrendChart data={hourlyData} />
            </div>
          </>
        );
      case 'security':
        return <SecurityView dayData={dayData} />;
      case 'analytics':
        return <AnalyticsView dayData={dayData} />;
      case 'focus':
        return <DeepFocusView />;
      case 'settings':
        return <SettingsView />;
      case 'alerts':
        return <AlertsHistoryView />;
      case 'profile':
        return <ProfileView />;
      default:
        return (
          <div className="flex flex-col items-center justify-center py-32 text-slate-300 border-2 border-dashed border-slate-200 rounded-3xl animate-in fade-in zoom-in-95 duration-500">
            <h2 className="text-2xl font-black uppercase tracking-widest">{activeView.replace('-', ' ')}</h2>
            <p className="font-bold text-sm mt-2 uppercase tracking-tight">Access Restricted — System in Development</p>
          </div>
        );
    }
  };

  if (!isLoggedIn) {
    return <LoginView onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="min-h-screen bg-transparent text-slate-900 font-outfit selection:bg-cyber-green/20">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />

      <div style={{ marginLeft: '88px', padding: '24px 40px' }} className="max-w-[1500px] mx-auto">
        <Header
          isFocused={isFocused}
          onToggle={handlePersonaToggle}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          days={data.selected_days}
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
            <a href="#" className="hover:text-slate-600 transition-colors">Tracking Logic</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
