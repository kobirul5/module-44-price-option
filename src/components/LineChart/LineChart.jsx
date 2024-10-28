
import { LineChart as LChart, Line } from 'recharts';
const LineChart = () => {
  
            const mathMarksData = [
                { id: 1, student_name: "Alice", math_marks: 78 },
                { id: 2, student_name: "Bob", math_marks: 85 },
                { id: 3, student_name: "Charlie", math_marks: 92 },
                { id: 4, student_name: "Daisy", math_marks: 88 },
                { id: 5, student_name: "Evan", math_marks: 76 },
                { id: 6, student_name: "Fay", math_marks: 81 },
                { id: 7, student_name: "George", math_marks: 90 }
              ];
    return (
        <div>
            
            <LChart width={500} height={400} data={mathMarksData}>
                <Line dataKey="math_marks"/>
            </LChart>
          
        </div>
    );
};

export default LineChart;