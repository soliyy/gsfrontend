import { NextResponse } from 'next/server';

type Range = '7d' | '30d' | '90d';

export async function GET(request: Request) {
    const url = new URL(request.url);
    const range = (url.searchParams.get('range') as Range) || '30d';

    // Dados simulados com base no intervalo
    const data: Record<Range, { totalConsumption: number; peakDate: string; averageConsumption: number }> = {
        '7d': { totalConsumption: 1200, peakDate: '2024-01-05', averageConsumption: 171 },
        '30d': { totalConsumption: 5000, peakDate: '2024-01-15', averageConsumption: 166 },
        '90d': { totalConsumption: 15000, peakDate: '2023-12-25', averageConsumption: 167 },
    };

    // Retornar os dados com base no intervalo solicitado
    return NextResponse.json(data[range]);
}
