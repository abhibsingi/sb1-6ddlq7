import React from 'react';
import { Bell, AlertTriangle } from 'lucide-react';

interface Alert {
  id: number;
  message: string;
  severity: 'high' | 'medium' | 'low';
  timestamp: string;
}

interface AlertListProps {
  alerts: Alert[];
}

export const AlertList: React.FC<AlertListProps> = ({ alerts }) => {
  const severityColors = {
    high: 'bg-red-100 text-red-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-blue-100 text-blue-800',
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-2 mb-4">
        <Bell className="w-5 h-5 text-gray-700" />
        <h2 className="text-lg font-semibold">Recent Alerts</h2>
      </div>
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="flex items-start gap-3 p-3 rounded-lg bg-gray-50"
          >
            <AlertTriangle className="w-5 h-5 text-gray-600 mt-0.5" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className={`text-sm px-2 py-1 rounded-full ${severityColors[alert.severity]}`}>
                  {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
                </span>
                <span className="text-sm text-gray-500">{alert.timestamp}</span>
              </div>
              <p className="mt-1 text-gray-700">{alert.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}