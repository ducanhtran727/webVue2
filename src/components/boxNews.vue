<template>
    <div class="box-news">
        <div class="news-img">
            <img :src="news.img" />
        </div>
        <div class="box-info">
            <div class="info-type"><span>{{news.date}}</span><p>{{news.type}}</p></div>
            <div class="info-name"><router-link class="link-name" to="/news">{{news.name}}</router-link></div>
            <div class="info-detail">Lorem ipsum dolor sit amet, consectetur adipisicing elit ut labore et dolore magna aliqua. Ut enim ad minim...</div>
            <div class="read-more"><router-link to="/news" class="link-more">Read More</router-link></div>
        </div>
    </div>
</template>
<script>
export default {
    props:['news']
}
</script>
<style scoped>
    .box-news{
        width: 30vw;
        height: 60vh;
    }
    .news-img{
        width: 100%;
        height: 60%;
    }
    .news-img img{
        width: 100%;
        height: 100%;
    }
    .box-info{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    .info-type{
        font-size: 12px;
        margin-top: 10px;
        width: 40%;
        display: flex;
        justify-content: space-around;
    }
    .info-type span {
        font-weight: bold;
        color: gray;
    }
    .info-type p {
        font-weight: bold;
        color: black;
        cursor: pointer;
        position: relative;
    }
    .info-type p::after{
        content: '';
        display: block;
        height: 1px;
        left: 0;
        position: absolute;
        width: 0%;
        background-color: black;
        transition: all .5s;
    }
    .info-type p:hover::after{
        width: 100%;
        transition: all .5s;
    }
    .info-name{
    font-size: 21px;
    padding: 10px 25px;    
    text-align: center;
    word-wrap: break-word;
    cursor: pointer;
    }
    .link-name{
        text-decoration: none;
        color: black;
    }
    .link-name:hover{
        text-decoration: underline;
    }
    .info-detail{
        font-size: 13px;
        font-weight: 500;
        color: gray;
        text-align: center;
        word-wrap: break-word;
        padding: 0;
    }
    .link-more{
        color:black;
        font-size: 14px;
        text-decoration: none;
    }
    .read-more{
          margin-top:5px;
          position: relative;
    }
    .read-more::after{
        content: '';
        display: block;
        height: 2px;
        left: 0;
        position: absolute;
        width: 100%;
        background-color: black;
        transition: all .5s;
    }
</style>