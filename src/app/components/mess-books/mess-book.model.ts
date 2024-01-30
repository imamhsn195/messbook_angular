export interface Diary{
    id?: string,
    title: string,
    startDate?: Date,
    endDate?: Date,
    createdBy: number,
    attachment?: string,
    status: boolean
}