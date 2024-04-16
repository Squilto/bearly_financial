import { PrismaClient } from '@prisma/client';
import { useEffect, useState } from 'react';

const prisma = new PrismaClient();

const FinanceRec = ({ userEmail }) => {
  const [financialRecords, setFinancialRecords] = useState([]);

  useEffect(() => {
    const fetchFinancialRecords = async () => {
      try {
        // Fetch financial records based on user email
        const user = await prisma.user.findUnique({
          where: {
            email: userEmail,
          },
          include: {
            financialRecords: true,
          },
        });

        if (user) {
          setFinancialRecords(user.financialRecords);
        }
      } catch (error) {
        console.error('Error fetching financial records:', error);
      }
    };

    fetchFinancialRecords();

    // Cleanup function
    return () => {
      prisma.$disconnect();
    };
  }, [userEmail]);

  return (
    <div>
      <h2>Financial Records for {userEmail}</h2>
      <ul>
        {financialRecords.map(record => (
          <li key={record.id}>
            {/* Display financial record details */}
            {/* Example: <p>{record.amount} - {record.date}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FinanceRec;
