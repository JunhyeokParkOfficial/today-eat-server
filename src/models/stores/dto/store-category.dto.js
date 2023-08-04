export class StoreCategoryDTO{
    storeId;
    name;
    rank;
    status;
    score;
    reviewCount;
    time;
    imageUrl;
    reviewContent;
    isWishlist;

    constructor(props){
        this.storeId = props.id;
        this.name = props.name;
        this.time = props.time;
        this.imageUrl = props.imageUrl;
        this.rank = props.rank;
        this.status = props.status;
        this.score = props.score;
        this.reviewCount = props.reviewCount;
        this.reviewContent = props.reviewContent;
        this.isWishlist = props.isWishlist;
    }
}