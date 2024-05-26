// ==UserScript==
// @name         导航
// @namespace    http://tampermonkey.net/
// @version      2024-05-01
// @description  try to take over the world!
// @author       You
// @match        https://www.bidianer.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bidianer.com
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

    var sortStatus = 0;

    // 从本地存储中检索数据
    var retrievedData = localStorage.getItem('guUrl');
    console.log(retrievedData); // 输出 "value"

	var url ="https://push2.eastmoney.com/api/qt/ulist.np/get?fltt=2&fields=f12,f13,f19,f14,f139,f148,f2,f4,f1,f125,f18,f3,f152,f5,f30,f31,f32,f6,f8,f7,f10,f22,f9,f112,f100,f88,f153,f62&secids=0.002735,1.601766,1.601179,0.000099,0.001696,0.002708,0.002792,0.000528,0.002456,1.518880,0.002455,1.603726,0.000524,1.515880,0.000521,0.002583,0.000801,1.600203,0.002085,1.603580,0.002161,1.600839,0.159740,0.002632,1.600756,0.002194,0.002340,1.603657,0.002979,0.001896,1.600733,0.003015,0.002097,0.002423,1.600703,0.002246,1.603663,0.002709,1.600498,1.601138,0.000030,0.002176,0.000625,1.603799,1.603259,0.159755,1.516520,0.000586,0.159889,0.002432"
    url="https://push2.eastmoney.com/api/qt/ulist.np/get?fltt=2&fields=f12,f13,f19,f14,f139,f148,f2,f4,f1,f125,f18,f3,f152,f5,f30,f31,f32,f6,f8,f7,f10,f22,f9,f112,f100,f88,f153,f62&secids=0.002962,0.002244,0.000560,0.001696,1.601766,1.601179,0.002085,0.002590,0.000801,0.002827,0.300045,0.002253,1.603506,0.002188,1.513330,0.002167,0.002339,1.601456,0.002425,0.002226,0.002096,0.000737,1.600580,0.002037,1.600155,1.601099,0.002050,0.002166,1.600789,0.002097,0.000099,0.000913,0.002709,0.002455,1.600990,1.600727,0.000524,1.600203,0.002583,0.000528,0.000977,1.603580,1.603726,0.000521,0.002668,0.002708,1.600372,0.002979,0.000555,1.601069,1.601878,0.000978,0.002023,1.605228,0.002130,0.002466,1.603017,0.003023,1.600501,0.002805,0.000561,1.603712,0.002519,1.601857,0.000519,1.603306,1.603327,1.603261,0.002151,0.300036,1.603042,0.002362,0.000628,0.002792,0.002635,1.603660,1.603357,1.600839,1.600756,1.603183,1.601318,0.002057,0.000612,0.002632,0.002735,0.000777,1.601989,1.601186,0.002128,1.601360,0.000951,1.603663,1.600707,0.000100,1.600577,0.002611,0.002526,0.002579,1.603933,1.600584,0.000030,1.600498,1.600703,0.002957,0.002755,1.560000,1.603719,1.600741,0.159688,1.561120,0.159870,1.515790,1.512290,1.512480,1.513130,1.516690,105.SYBX,0.159998,124.HSTECH,90.BK0447,90.BK0737,90.BK1030,90.BK1015,90.BK0473,90.BK0732,90.BK1032,1.515880,1.518880,1.512200,1.512880,1.588000,0.159509,0.159819,90.BK1157,90.BK1166,116.00700,1.510300,1.512680,0.159857,1.515030,0.159755,90.BK1016,90.BK1090,1.512660,1.600879,90.BK0921,90.BK0475,1.603496,90.BK0711,0.000899,1.512810,150.005698,1.515050,0.002797,1.600938,1.601168,0.003032,1.600346,0.002326,1.600406,0.000725,1.600096,1.600089,1.600438,1.601985,0.002941,1.600056,1.603628,1.603105,150.320007,1.600988,0.301038,0.002475,0.300199,0.002432,1.601088,1.601899,0.002761,1.600547,0.300166,0.300860,1.601865,0.002497,1.600809,0.002240,0.002241,1.600428,1.600188,1.603283,1.601117,0.002453,1.600367,0.002598,1.603060,1.600739,1.600333,0.300435,1.603501,0.301051,0.002013,1.601919,1.601600,0.002268,0.002256,1.600516,1.600010,1.688598,0.002407,0.301050,0.002594,1.600276,1.600111,0.002248,0.000968,1.600699,0.000792,0.300142,0.002460,0.002371,0.000751,0.300015,0.300296,0.300760,1.600760,0.002176,1.688819,1.688981,0.300763,0.002472,1.601138,0.002271,1.601012,1.603799,1.000001,0.300059,1.600519,105.AAPL,100.NDX"


    if(retrievedData){
        url = retrievedData;
        console.log("22222",retrievedData)
    }

	function init() {
		var elements = document.getElementsByClassName("sidebar-right");


		// 获取第一个符合条件的元素
		var aaElement = elements[0];

		// 获取该元素下所有 class 为 "bb" 的元素
		var bbElements = aaElement.getElementsByClassName("sidebar-item");

		// 如果存在至少两个 class 为 "bb" 的元素
		if (bbElements.length >= 2) {
			// 获取第二个 class 为 "bb" 的元素
			var bbElement = bbElements[1]

			// 修改该元素的 HTML 内容
			// 创建要添加的 HTML 内容
			var htmlContent = '<div style="padding:10px"><div id="yourDivId" style="height:250px;overflow-y: scroll;color:#767070"></div></div>'

			bbElement.innerHTML = htmlContent;
		}
	}
	var inde = 0;

    function addEvents(){
        // 获取需要添加点击事件的元素，可以使用 document.querySelector() 方法
        var elements = document.querySelectorAll('.topEnvent'); // 通过类名获取元素

        // 遍历所有匹配的元素，并为每个元素添加点击事件监听器
        elements.forEach(function(element) {
            element.addEventListener('click', function() {
                // 点击事件触发时执行的代码
                console.log('Element clicked!',element);
                 // 获取属性值并打印
                var attributeValue = element.getAttribute('data-value');
                url = url.replace("secids=","secids="+attributeValue+",");
                attributeValue = ","+attributeValue;
                url = url.replace(attributeValue,"");
                console.log(attributeValue,url);
                    // 将数据保存到本地存储
                localStorage.setItem('guUrl', url);
                // 在这里可以添加你想要执行的操作
            });
        });

        // 获取需要添加点击事件的元素，可以使用 document.querySelector() 方法
        var elements1 = document.querySelectorAll('.cancelEnevent'); // 通过类名获取元素

        // 遍历所有匹配的元素，并为每个元素添加点击事件监听器
        elements1.forEach(function(element) {
            element.addEventListener('click', function() {
                // 点击事件触发时执行的代码
                console.log('Element clicked!',element);

                localStorage.removeItem('guUrl');
            });
        });

        // 获取需要添加点击事件的元素，可以使用 document.querySelector() 方法
        var elements2 = document.querySelectorAll('.sortDesc'); // 通过类名获取元素

        // 遍历所有匹配的元素，并为每个元素添加点击事件监听器
        elements2.forEach(function(element) {
            element.addEventListener('click', function() {
                // 点击事件触发时执行的代码
                console.log('Element clicked!',element);
                sortStatus = 1
            });
        });

         // 获取需要添加点击事件的元素，可以使用 document.querySelector() 方法
        var elements3 = document.querySelectorAll('.sortAsc'); // 通过类名获取元素

        // 遍历所有匹配的元素，并为每个元素添加点击事件监听器
        elements3.forEach(function(element) {
            element.addEventListener('click', function() {
                // 点击事件触发时执行的代码
                console.log('Element clicked!',element);
                sortStatus = 2
            });
        });
    }

	function setHmtl(responseData) {
		// 获取所有 class 为 "sidebar-right" 的元素
		console.log("收到的数据：", responseData);
		inde = inde + 1;
		// 获取要添加 HTML 内容的目标 div 元素
		var targetDiv = document.getElementById("yourDivId"); // 用你的实际的 div id 替换 "yourDivId"

		// 创建一个无序列表元素
		var ulElement = '<ul>'

		// 遍历 responseData 中的 list 元素，并将其转换为 HTML 列表项
        var dataList = responseData.data.diff;
        if(sortStatus == 1){
            dataList.sort((a, b) => b.f3 - a.f3);
        }
        if(sortStatus == 2){
            dataList.sort((a, b) => a.f3 - b.f3);
        }
		dataList.forEach(function(item) {
			ulElement += '<li>';
			// 创建列表项元素
			var liElement = document.createElement("li");
            var amount = item.f62;
            if (Math.abs(amount) >= 100000000) {
                amount = (amount / 100000000).toFixed(2) + "亿";
            } else {
                amount = (amount / 10000).toFixed(2) + "";
            }
			if (item.f3 >= 0) {
				// 设置列表项的文本内容
				ulElement += '<div class="container" style="display: flex;flex-wrap: wrap;color:#666;margin-bottom:5px">' +
					'<div class="box cancelEnevent" style="flex:3;cursor: pointer;">'+ item.f14 +'</div>' +
					'<div class="box" style="flex:3">'+ item.f100 +'</div>' +
					'<div class="box sortAsc" style="flex:2;cursor: pointer">'+ item.f2 +'</div>' +
					'<div class="box topEnvent" style="flex:2;cursor: pointer;" data-value="'+item.f13+'.'+item.f12+'" >'+ item.f3 +'</div>' +
                    '<div class="box" style="flex:2;cursor: pointer">'+ amount +'</div>' +
					'</div>'
				//ulElement += item.f14 + "：" + item.f100 + "：" + item.f2 + "：" + item.f3 + "：" + inde;
			} else {
				// 设置列表项的文本内容
				ulElement += '<div class="container" style="display: flex;flex-wrap: wrap;color:#5865cf;margin-bottom:5px">' +
					'<div class="box cancelEnevent" style="flex:3;cursor: pointer;">'+ item.f14 +'</div>' +
					'<div class="box" style="flex:3">'+ item.f100 +'</div>' +
					'<div class="box sortDesc" style="flex:2;cursor: pointer">'+ item.f2 +'</div>' +
					'<div class="box topEnvent" style="flex:2;cursor: pointer;" data-value="'+item.f13+'.'+item.f12+'" >'+ item.f3 +'</div>' +
                    '<div class="box" style="flex:2;cursor: pointer">'+ amount +'</div>' +
					'</div>'
			}

			// 将列表项添加到无序列表中
			ulElement += '</li>';
		});
		ulElement += '</ul>'
		// 将生成的无序列表添加到目标 div 中
		targetDiv.innerHTML = ulElement;

        // 点击事件
        addEvents()
	}

	function sendGETRequest(url) {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", url, true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				var responseData = JSON.parse(xhr.responseText); // 解析 JSON 格式的响应数据
				// 在这里对 responseData 进行处理

				setHmtl(responseData);
			}
		};
		xhr.send();
	}

    var interval = 2000; // 设置间隔时间，单位为毫秒（这里是每隔 5 秒发送一次请求）
	setInterval(function() {
		sendGETRequest(url); // 发送 GET 请求
	}, interval);
	setTimeout(function() {
		init();
		sendGETRequest(url); // 发送 GET 请求
	}, interval);

	// 创建样式字符串
	var customStyle = `
        /* 设置滚动条样式 */
        ::-webkit-scrollbar {
            width: 2px; /* 设置滚动条宽度 */
        }

        ::-webkit-scrollbar-thumb {
            background-color: #888; /* 设置滚动条滑块颜色 */
            border-radius: 2px; /* 设置滚动条滑块的圆角 */
        }

        ::-webkit-scrollbar-track {
            background-color: #e2e3e9; /* 设置滚动条轨道颜色 */
            border-radius: 5px; /* 设置滚动条轨道的圆角 */
        }
        .container .box{
           flex: 1;
        }
    `;

	// 创建 style 标签
	var styleElement = document.createElement("style");
	styleElement.textContent = customStyle;

	// 将 style 标签添加到 head 中
	document.head.appendChild(styleElement);
	// Your code here...
})();
