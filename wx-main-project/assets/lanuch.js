
cc.Class({
    extends: cc.Component,

    properties: {
        display: cc.Node,
        userName: cc.Label,
        userIcon: cc.Sprite
    },

    start () {
        this._isShow = true;
        this._show = cc.moveTo(0.5, 0, 110);
        this._hide = cc.moveTo(0.5, 0, 1000);

        wx.getUserInfo({
            success: function(res) {
                console.log('success: ', res.rawData);
                var userInfo = res.userInfo;
                let nickName = userInfo.nickName;
                let avatarUrl = userInfo.avatarUrl;
                wx.postMessage({
                    nickName: nickName,
                    avatarUrl: avatarUrl
                });   
            },
            fail: function (res) {
                console.log(res);
            }
        });
    },

    onClick () {
        this._isShow = !this._isShow;
        if (this._isShow) {
            this.display.runAction(this._show);
        }
        else {
            this.display.runAction(this._hide);
        }
    }
});
