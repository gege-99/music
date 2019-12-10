export const    getImg=(mid)=>{
    return `https://y.gtimg.cn/music/photo_new/T001R300x300M000${mid}.jpg?max_age=2592000`
}

export const getData=(arrs)=> {
    let obj = { 'hot': { title: "hot", list: [] } };
    arrs.map((item, index) => {
      let { Findex, Fsinger_mid, Fsinger_name } = item;
      let   singerInfo={ Findex, Fsinger_mid, Fsinger_name}
      singerInfo.img=getImg(Fsinger_mid)
      if (index < 10) {
        obj.hot.list.push(singerInfo);
      }
      if (obj[Findex]) {
        obj[Findex].list.push(singerInfo);
      } else {
        obj[Findex] = {
          title: Findex,
          list: [singerInfo]
        };
      }
      return item;
    });
    let hot = [];
    let other = [];
    for (const key in obj) {
      if (key === "hot") {
        hot.push(obj[key]);
      } else if (key != "hot" && key != 9) {
        other.push(obj[key]);
      }
    }
    let order=other.sort((a,b)=>{return a.title.charCodeAt()-b.title.charCodeAt()})
      let result =hot.concat(order)
    return result
 }