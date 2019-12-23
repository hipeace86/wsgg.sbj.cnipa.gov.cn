// 2019-12-23
const request = require('superagent').agent();
const queryUrl = "http://wsgg.sbj.cnipa.gov.cn:9080/tmann/annInfoView/annSearchDG.html";

const headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
};

(async () => {
    let params = {
        page: 1,
        rows: 20,
        annNum: 1638,
        annType: null,
        tmType: null,
        coowner: null,
        recUserName: null,
        allowUserName: null,
        byAllowUserName: null,
        appId: null,
        appIdZhiquan: null,
        bfchangedAgengedName: null,
        changeLastName: null,
        transferUserName: null,
        acceptUserName: null,
        regName: null,
        tmName: null,
        intCls: null,
        fileType: null,
        totalYOrN: true,
        appDateBegin: null,
        appDateEnd: null,
        agentName: null
    }

    let resp = await request.post(queryUrl).set(headers)
        .send(params)//.ok(res => res.status < 600);
    ;
    console.log(resp.text);
})();
