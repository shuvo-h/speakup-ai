// make model to create a short card which will be checked during convering audio.
// no need to perform query in the billing slip model, that would be a large collection and query inside that will be time consume
// this collection will keep only  active current month's slip card and this card will be automatically deleted after the card expire date
// so this collection will be not too big with only the current active users card

/*
const convertCard = {
    user_id:"",
    bollingSlip_id:"",
    purchase_date:"",
    expire_date:"",
    req_per_day:0,
    characterLiimitperReq:0,
    total_allowed_character:0,
    size: { // during deleting this card after expire, add this size with file count to my special collection to keep record how much this tool has converted
        type: Number,
        required: [true,"File size is required"],
        min:[0,"File size  can not be negative"]
    },
    file_count:{ // keep this to kepp track how many file was created total and move it in special collection during deleting this card after expire
        type: Number,
        required: [true,"File count is required"],
        min:[0,"File count  can not be negative"]
    }
}
*/