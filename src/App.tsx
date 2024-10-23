import React from 'react';
import { StatusCard } from './components/StatusCard';
import { Chart } from './components/Chart';
import { AlertList } from './components/AlertList';
import { Building2, Gauge, Thermometer, Droplets, Zap, Wind } from 'lucide-react';

// Simulated data - in a real app, this would come from your backend
const mockAlerts = [
  {
    id: 1,
    message: "Unusual structural strain detected in east wing",
    severity: "high",
    timestamp: "2 minutes ago"
  },
  {
    id: 2,
    message: "Temperature above normal in server room",
    severity: "medium",
    timestamp: "15 minutes ago"
  },
  {
    id: 3,
    message: "Minor seismic activity detected",
    severity: "low",
    timestamp: "1 hour ago"
  }
] as const;

const mockChartData = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  temperature: Math.random() * 10 + 20,
  energy: Math.random() * 50 + 100,
  strain: Math.random() * 0.5 + 0.1,
}));

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <Building2 className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Building Health Monitor</h1>
              <p className="text-gray-500">Real-time structural and environmental monitoring</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Status Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatusCard
            title="Structural Integrity"
            value="98.5"
            unit="%"
            status="normal"
          />
          <StatusCard
            title="Air Quality Index"
            value="65"
            unit="AQI"
            status="warning"
          />
          <StatusCard
            title="Temperature"
            value="23.5"
            unit="°C"
            status="normal"
          />
          <StatusCard
            title="Power Consumption"
            value="425"
            unit="kW/h"
            status="warning"
          />
          <StatusCard
            title="Moisture Level"
            value="35"
            unit="%"
            status="normal"
          />
          <StatusCard
            title="Seismic Activity"
            value="0.2"
            unit="mg"
            status="normal"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Thermometer className="w-5 h-5 text-gray-700" />
              Temperature Trend
            </h2>
            <Chart
              data={mockChartData}
              dataKey="temperature"
              stroke="#f59e0b"
            />
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-gray-700" />
              Energy Consumption
            </h2>
            <Chart
              data={mockChartData}
              dataKey="energy"
              stroke="#3b82f6"
            />
          </div>
        </div>

        {/* Alerts Section */}
        <AlertList alerts={mockAlerts} />
      </main>
    </div>
  );
}

export default App;