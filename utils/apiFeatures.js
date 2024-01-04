class APIFeatures {
    constructor( query , queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    filter() { 
        // console.log(this.queryString);
        const queryObj = this.queryString.category;
        console.log(queryObj);
        if(queryObj)
        {
            this.query = this.query.find({ category : queryObj})
        }

        return this;
    }

    
}

module.exports = APIFeatures;