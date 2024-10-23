
import { LineChart as LChart, Line, XAxis, YAxis} from 'recharts';
const LineChart = () => {

    const subjectMarkData = [
        { id: 1, name: "Alice", math: 78, physics: 85, chemistry: 80 },
        { id: 2, name: "Bob", math: 82, physics: 88, chemistry: 75 },
        { id: 3, name: "Charlie", math: 75, physics: 80, chemistry: 70 },
        { id: 4, name: "David", math: 88, physics: 90, chemistry: 92 },
        { id: 5, name: "Eva", math: 70, physics: 65, chemistry: 68 },
        { id: 6, name: "Frank", math: 90, physics: 95, chemistry: 89 },
        { id: 7, name: "Grace", math: 65, physics: 70, chemistry: 72 },
        { id: 8, name: "Henry", math: 95, physics: 98, chemistry: 94 },
        { id: 9, name: "Ivy", math: 80, physics: 84, chemistry: 82 },
        { id: 10, name: "Jack", math: 77, physics: 78, chemistry: 76 },
    ];
    return (
        <div>
            <LChart width={800} height={400} data={subjectMarkData}>
            XAxis dataKey="name"/>
            <YAxis></YAxis>
            <Line dataKey='math' stroke='red'></Line>
            <Line dataKey={'physics'} stroke='yellow'></Line>
            </LChart>
            
        </div>
    );
};

export default LineChart;