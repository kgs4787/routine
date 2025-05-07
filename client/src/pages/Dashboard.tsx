import React from 'react';
import Layout from '../components/Layout/Layout';

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">대시보드</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 오늘의 루틴 카드 */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-800 mb-2">오늘의 루틴</h2>
            <p className="text-blue-600">아직 완료하지 않은 루틴이 없습니다.</p>
          </div>
          
          {/* 주간 통계 카드 */}
          <div className="bg-green-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-green-800 mb-2">주간 통계</h2>
            <p className="text-green-600">이번 주 달성률: 0%</p>
          </div>
          
          {/* 월간 통계 카드 */}
          <div className="bg-purple-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-purple-800 mb-2">월간 통계</h2>
            <p className="text-purple-600">이번 달 달성률: 0%</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard; 