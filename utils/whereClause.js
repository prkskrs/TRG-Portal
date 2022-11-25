// base : Product.find()
// base : Product.find(email:{"hiteshC@gmail.com"})
// bigQuery : search=coder&page=1&category=shortsleeves&rating[gte]=4&price[lte]=999&price[gte]=999&limit=5

  
export class WhereClause{
    constructor(base,bigQuery){
        this.base = base;
        this.bigQuery = bigQuery;
    }

    search(){
        const searchWord = this.bigQuery.search ? {
            $regex : this.bigQuery.search,
            $options : 'i'
        } : {}

        this.base = this.base.find({...searchWord})
        return this;
    }

    filter(){
        const copyQuery = {...this.bigQuery}
        delete copyQuery["search"];
        delete copyQuery["page"]; 
        delete copyQuery["limit"];

        // convert bigQuery into a string ==> copyQuery
        let stringOfCopyQuery = JSON.stringify(copyQuery);

        stringOfCopyQuery = stringOfCopyQuery.replace(/(gte|lte|gt|lt)/g,m=>`$${m}`);
        const jsonOfCopyQuery = JSON.parse(stringOfCopyQuery);

        this.base = this.base.find(jsonOfCopyQuery)

        return this;
    }

    pager(resultPerPage){
        // assumed
        let currentPage = 1;

        // update as in bigQuery
        if(this.bigQuery.page){
            currentPage = this.bigQuery.page;
        }

        const skipValue = resultPerPage * (currentPage - 1)

        this.base = this.base.limit(resultPerPage).skip(skipValue)

        return this;

    }


    // order really matter for skip features


}

// 'i' : case insensitivity
// 'g' : global search