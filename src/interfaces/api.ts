export interface ApiDefaultResponse<Model> {
    success: boolean;
    model: Model;
    errors: any;
}