import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { CheckCircle, Clock, Target, TrendingUp } from 'lucide-react';
import { TodoAnalyticsProps } from '../../types/Todo';
import { calculateTodoStats } from '../../lib/todoUtils';

const TodoAnalytics: React.FC<TodoAnalyticsProps> = ({ todos }) => {
  const stats = calculateTodoStats(todos);

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-blue-600" />
          Análise de Produtividade
        </CardTitle>
        <CardDescription>
          Estatísticas detalhadas sobre suas tarefas e progresso
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Estatísticas Principais */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <Target className="h-6 w-6 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
            <div className="text-sm text-gray-600">Total</div>
          </div>
          
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <CheckCircle className="h-6 w-6 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
            <div className="text-sm text-gray-600">Concluídas</div>
          </div>
          
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <Clock className="h-6 w-6 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-orange-600">{stats.pending}</div>
            <div className="text-sm text-gray-600">Pendentes</div>
          </div>
          
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <TrendingUp className="h-6 w-6 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-600">{stats.completionRate}%</div>
            <div className="text-sm text-gray-600">Taxa</div>
          </div>
        </div>

        {/* Barra de Progresso */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Progresso Geral</span>
            <Badge variant="secondary">{stats.completionRate}%</Badge>
          </div>
          <Progress value={stats.completionRate} className="h-2" />
        </div>

        {/* Insights */}
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-2">💡 Insights</h4>
          <div className="text-sm text-gray-600">
            {stats.completionRate === 100 ? (
              <p>🎉 Parabéns! Você concluiu todas as suas tarefas!</p>
            ) : stats.completionRate >= 50 ? (
              <p>Ótimo progresso! Continue assim!</p>
            ) : (
              <p>Que tal focar em completar algumas tarefas pendentes?</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TodoAnalytics;