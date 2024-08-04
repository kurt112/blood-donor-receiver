export interface Address {
    region: Region | null,
    province: Province | null,
    state: State | null
}

export interface Region {
    id: number,
    created_at: Date,
    updated_at: Date,
    name: string,
    code: string
}

export interface Province extends Region{
    region_id: number
}

export interface State extends Province {
    province_id: number
}
