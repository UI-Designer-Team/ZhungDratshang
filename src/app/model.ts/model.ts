export class studentDetails{
  constructor(
    public id:string,
    public student_identity_no:number,
    public cid:number,
    public first_name:string,
    public middle_name:string,
    public last_name:string,
    public dob:string,
    public pervious_qualification:string,
    public father_name:string,
    public father_occupation:string,
    public mother_name:string,
    public mother_occupation:string,
    public village:string,
    public gewog:string,
    public dzongkhag:string,
  ){}
}
export class studentAcademicDetails{
  constructor(
    public id:string,
    public student_identity_no: string,
    public organization:string,
    public batch:string,
    public classs:string,
    public section:string,
    public year:string,
    public module_1:string,
    public module_2:string,
    public module_3:string,
    public module_4:string,
    public module_5:string,
  ){}
}
export class teacherDetails{
  constructor(
    public id:string,
    public cid:number,
    public first_name:string,
    public second_name:string,
    public last_name:string,
    public village:string,
    public gewog:string,
    public dzongkhag:string,
  ){}
}
export class teacherCourseTaken{
  constructor(
    public id:number,
    public course:number,
    public organiztion:number,
    public batch:number,
    public classs:number,
    public status:number,
    public teacher:string,
    public remarks:string,
  ){}
}

export class org{
  constructor(
    public id:number,
    public organization_name:string,
    public org_description:string
  ){}
}

export class Batch{
  constructor(
    public id:number,
    public start_year:string,
    public end_year:string,
    public class_id:string,
  ){}
};

export class Standard {
  constructor(
    public id:number,
    public class_name:string,
    public org_id:string,

  ){}
};

export class StudentMark {
  constructor(
    public id:number,
    public student_identity_no:string,
    public organization:string,
    public batch:string,
    public classs:string,
    public section:string,
    public course:string,
    public quarterly_result:string,
    public biannual_result:string,
    public annual_result:string,
    public final_result:string,
    public status:string,
  ) {}
};

export class Organization {
  constructor(
    public id:string,
    public organization_name:string,
    public org_location:string,
    public org_type:string,
    public org_description:string,
  ){}
}

export class StudentResult{
  constructor(
    public id:string,
    public student_identity_no: string,
    public module_1:string,
    public module_2:string,
    public module_3:string,
    public module_4:string,
    public module_5:string,
    public module1_mark:string,
    public module2_mark:string,
    public module3_mark:string,
    public module4_mark:string,
    public module5_mark:string,
  ){}
}
