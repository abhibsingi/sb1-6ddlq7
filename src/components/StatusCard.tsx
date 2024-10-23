import React from 'react';
import { AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

type Status = 'normal' | 'warning' | 'critical';

interface StatusCardProps {
  title: string;
  value: string | number;
  status: Status;
  unit?: string;
}

const statusConfig = {
  normal: {
    icon: CheckCircle2,
    color: 'text-green-500',
    bg: 'bg-green-50',
  },
  warning: {
    icon: AlertTriangle,
    color: 'text-yellow-500',
    bg: 'bg-yellow-50',
  },
  critical: {
    icon: XCircle,
    color: 'text-red-500',
    bg: 'bg-red-50',
  },
};

export const StatusCard: React.FC<StatusCardProps> = ({ title, value, status, unit }) => {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className={`${config.bg} p-6 rounded-xl shadow-sm`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-gray-700 font-medium">{title}</h3>
          <div className="mt-2 flex items-baseline">
            <p className="text-2xl font-semibold">{value}</p>
            {unit && <span className="ml-1 text-gray-600">{unit}</span>}
          </div>
        </div>
        <Icon className={`${config.color} w-6 h-6`} />
      </div>
    </div>
  );
}