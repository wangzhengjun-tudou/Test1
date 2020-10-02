$(function(){
    initTable()
    sum()
})

//初始化表格
function initTable(){
    for(var i=0;i<5;i++){
        var tr = $("<tr></tr>")


        var td1 = $("<td><input type='checkbox' onclick='tongji()' ><img src='../img/马里奥.jpg'></td>")
        var td2 = $("<td>大土豆"+i+"</td>")
        var td3 = $("<td>规格：默认<br />尺寸：默认</td>")
        var td4 = $("<td><p>10</p></td>")
        var td5 = $("<td>" +
            "<button class='minus' onclick='minusOne()'>-</button>"+
            "<input class='num' type='text' value='100' style='width: 30px;text-align: center'>" +
            "<button class='plus' onclick='plussOne()'>+</button>"+
            "</td>")
        var td6 = $("<td><p id='sum' value>1000</p></td>")
        var td7 = $("<td></td>")

        var a=$("<a href='#'>删除</a>")
        a.appendTo(td7)


        td1.appendTo(tr)
        td2.appendTo(tr)
        td3.appendTo(tr)
        td4.appendTo(tr)
        td5.appendTo(tr)
        td6.appendTo(tr)
        td7.appendTo(tr)

        var tbody = $("tbody")
        tr.appendTo(tbody)


        a.click(function (){
            var tr_0 = $(this).parent().parent();
            tr_0.remove();
        })
    }
}


function plussOne(){
    var td = $(this).parent("td").children();
    var num = td.eq(1);
    alert(Number(td.val(),10));

}


function minusOne(){
    var td = $(this).parent("td").children();
    var num = td.eq(1);
    alert(num);
}


function sum(){

}

//统计总价
function tongji(){
    var checkeds = $("table :checked");
    var sumprice=0;
    $.each(checkeds,function (i,n){
        n = $(n);//当前选中的复选框
        var childern = n.parents("tr").children();
        var td = childern.eq(5);
        sumprice = sumprice + Number(td.text(),10);

    })

    $("#allsum").text(sumprice);
}

function allchecked(){

}







