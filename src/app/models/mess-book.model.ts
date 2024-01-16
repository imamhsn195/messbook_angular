export interface MessBook{
    id: number,
    title: string,
    startDate: Date,
    endDate: Date,
    createdBy: number,
    attachment?: string,
    status: boolean
}