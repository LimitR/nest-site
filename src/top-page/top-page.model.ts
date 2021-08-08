export enum TopLevelCategory{
    Courses,
    Services,
    Books,
    Products
}


export class TopPageModel {
    _id: string;
    firstCategory: TopLevelCategory;
    secondCategoty: string;
    category: string;
    hh?:{
        count: number;
        juniorSalary: number;
        middleSalary: number;
        seniorSalary: number;
    };
    adventages: {
        title: string;
        description: string;
    }[];
    seoText: string;
    tagsTitle: string;
    tag: string[];


}
