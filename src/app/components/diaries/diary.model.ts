export interface Diary{
    _id?: string,
    title: string,
    start_date?: Date,
    end_date?: Date,
    creator: String,
    attachment?: string,
    status?: boolean
}