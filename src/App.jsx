import { useState } from 'react';
import { Zap, SlidersHorizontal, Gauge } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CognitiveGauge from './components/CognitiveGauge';
import MetricCard from './components/MetricCard';
import TrendChart from './components/TrendChart';
import InsightBox from './components/InsightBox';
import { focusedFlowData, fragmentedLoadData } from './data/mockData';

export default function App() {
  const [isFocused, setIsFocused] = useState(true);
  const data = isFocused ? focusedFlowData : fragmentedLoadData;

  return (
    <div className="min-h-screen bg-navy">
      <Sidebar />

      {/* Main Content — offset from fixed sidebar */}
      <div style={{ marginLeft: '88px', padding: '32px 40px' }}>
        <Header
          isFocused={isFocused}
          onToggle={() => setIsFocused(!isFocused)}
          tabCount={data.tab_count}
        />

        {/* Hero Gauge */}
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-md">
            <CognitiveGauge score={data.daily_score} />
          </div>
        </div>

        {/* Metric Triplets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <MetricCard
            title="Attention Fragmentation"
            score={data.fragmentation_score}
            icon={Zap}
            details={data.fragmentation_details}
          />
          <MetricCard
            title="Cognitive Friction"
            score={data.friction_score}
            icon={SlidersHorizontal}
            details={data.friction_details}
          />
          <MetricCard
            title="Context Pressure"
            score={data.pressure_score}
            icon={Gauge}
            details={data.pressure_details}
          />
        </div>

        {/* Trend Chart */}
        <div className="mb-8">
          <TrendChart data={data.hourly_trends} />
        </div>

        {/* Insight Box */}
        <InsightBox insight={data.insight} />
      </div>
    </div>
  );
}
