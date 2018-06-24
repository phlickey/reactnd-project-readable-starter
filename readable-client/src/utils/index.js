const API_DOMAIN = "localhost:3001";
const API_SCHEME = "http://";
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)
const authHeader = { 'Authorization': token};

async function getCategories(){
    let serverResponse = await fetch(API_SCHEME+API_DOMAIN+`/categories`, {headers: authHeader});
    let data = await serverResponse.json();
    return data;
}

async function getPostsBycategory(category){
    let serverResponse = await fetch(API_SCHEME+API_DOMAIN+`/${category}/posts`, {headers: authHeader});
    let data = await serverResponse.json();
    return data;
}

async function getPosts(){
    let serverResponse = await fetch(API_SCHEME+API_DOMAIN+`/posts`, {headers : authHeader});
    let data = await serverResponse.json();
    return data;
}

async function submitPost({id, timestamp, title, body, author, category}){
    let reqBody =  JSON.stringify({id, timestamp, title, body, author, category});
    let serverResponse = await fetch(API_SCHEME+API_DOMAIN+`/posts`, {
        method: "POST", 
        headers: {...authHeader, 'content-type' : 'application/json'}, 
        body: reqBody
    });
    let data = await serverResponse.json();
    return data;
}

async function getPostById(id){
    let serverResponse = await fetch(API_SCHEME+API_DOMAIN+`/posts/${id}`, {headers : authHeader});
    let data = await serverResponse.json();
    return data;
}

async function voteOnPost({id, vote}){
    let serverResponse = await fetch(API_SCHEME+API_DOMAIN+`/posts/${id}`, 
        {headers : {
            ...authHeader,
            'content-type':'application/json'
        },
        method: "POST",
        body: JSON.stringify({option:vote})
    }
    );
    let data = await serverResponse.json();
    return data;
}

async function editPost({id, title, body}){
    let serverResponse = await fetch(API_SCHEME+API_DOMAIN+`/posts/${id}`,{
        method: "PUT",
        headers: {
            ...authHeader,
            'content-type': 'application/json',
        },
        body : JSON.stringify({title, body})
    });
    let data = await serverResponse.json();
    return data;
}

async function deletePost(id){
    let serverResponse = await fetch(API_SCHEME+API_DOMAIN+`/posts/${id}`, {
        method: "DELETE", 
        headers: {...authHeader, 'content-type' : 'application/json'}, 
    });
    let data = await serverResponse.json();
    return data;
}

async function getCommentsByPost(postId){
    let serverResponse = await fetch(API_SCHEME+API_DOMAIN+`/posts/${postId}/comments`, {headers : authHeader});
    let data = await serverResponse.json();
    return data;
}

async function addComment({id, timestamp, body, author, parentId}){
    let serverResponse = await fetch(API_SCHEME+API_DOMAIN+`/comments`, 
        {headers : {
            ...authHeader,
            'content-type':'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            id,
            timestamp,
            body,
            author,
            parentId
        })
    }
    );
    let data = await serverResponse.json();
    return data;
}

async function getSingleComment(id){
    let serverResponse = await fetch(API_SCHEME+API_DOMAIN+`/comments/${id}`, {headers : authHeader});
    let data = await serverResponse.json();
    return data;
}

async function voteOnComment({id, vote}){
    let serverResponse = await fetch(API_SCHEME+API_DOMAIN+`/comments/${id}`, 
        {headers : {
            ...authHeader,
            'content-type':'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            option: vote
        })
    }
    );
    let data = await serverResponse.json();
    return data;
}

async function editComment({id, timestamp, body}){
    let serverResponse = await fetch(API_SCHEME+API_DOMAIN+`/comments/${id}`,{
        method: "PUT",
        headers: {
            ...authHeader,
            'content-type': 'application/json',
        },
        body : JSON.stringify({timestamp, body})
    });
    let data = await serverResponse.json();
    return data;
}

async function deleteComment(id){
    let serverResponse = await fetch(API_SCHEME+API_DOMAIN+`/comments/${id}`, {
        method: "DELETE", 
        headers: {...authHeader, 'content-type' : 'application/json'}, 
    });
    let data = await serverResponse.json();
    return data;
}

export {
    getCategories, 
    getPostsBycategory,
    getPosts, 
    submitPost,
    getPostById,
    voteOnPost,
    deletePost, 
    editPost,
    getCommentsByPost,
    addComment,
    getSingleComment,
    voteOnComment,
    editComment,
    deleteComment
};

