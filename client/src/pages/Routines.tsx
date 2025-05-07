import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { Routine } from '../types/routine';

const Routines: React.FC = () => {
  const [routines, setRoutines] = useState<Routine[]>([]);

  return (
    <Layout>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">루틴 관리</h1>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={() => {/* TODO: 루틴 추가 모달 열기 */}}
          >
            새 루틴 추가
          </button>
        </div>

        {routines.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">아직 등록된 루틴이 없습니다.</p>
            <p className="text-gray-500 mt-1">새로운 루틴을 추가해보세요!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routines.map((routine) => (
              <div
                key={routine.id}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-800">{routine.title}</h3>
                {routine.description && (
                  <p className="text-gray-600 mt-1">{routine.description}</p>
                )}
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {routine.frequency} 루틴
                  </span>
                  <button
                    className="text-red-500 hover:text-red-600"
                    onClick={() => {/* TODO: 루틴 삭제 */}}
                  >
                    삭제
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Routines; 