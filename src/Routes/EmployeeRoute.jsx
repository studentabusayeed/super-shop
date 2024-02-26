import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const EmployeeRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const employee = true;

    if (loading) {
        return <div className="w-20 h-20  border-l-2 border-green-500 rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]"><div className="w-16 h-16  border-b-2 border-indigo-500 rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]"><div className="w-10 h-10  border-r-2  border-sky-500 rounded-full animate-[spin_1.8s_linear_infinite]"></div></div></div>
    }

    if (user && employee) {
        return children;
    }

    return <Navigate to="/"></Navigate>;
};

export default EmployeeRoute;