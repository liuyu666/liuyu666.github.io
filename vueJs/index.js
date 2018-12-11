Vue.component('todo',{/*一定不要用驼峰式命名法，坑死了*/
	props:['todo'],/*父级一个属性传递到子集li标签里边*/
	template:`<li><a src="###">{{ todo.text }}<span :class="{'nav_more':todo.more}"></span></a><dl class="onmouse"><dt v-for="item in todo.moretext">{{item}}</dt></dl></li>`/*调用父级属性里边存的对象数据*/
})
var header = new Vue({
	el:'#header',
	data:{
		class_head_img:'class_head_img',
		src_head:'image/src_head.jpg',
		lists:[
			{id:0,text:'首页',more:false},
			{id:1,text:'学无止境',more:true,moretext:['前端','微信小程序','PHP']},
			{id:1,text:'分享无价',more:true,moretext:['软件工具','学习资料','优秀博客']},
			{id:1,text:'日记',more:false},
			{id:2,text:'关于我',more:false}
		]
	}
})
var bg = new Vue({
	el:'#bg',
	data:{
		src_bg:'image/bg.png',
		class_head_bg:'head_bg',
	}
})
Vue.component('saying',{/*一定不要用驼峰式命名法，坑死了*/
	props:['saying'],/*父级一个属性传递到子集li标签里边*/
	template:`<li><fieldset><legend>{{saying.title}}</legend><p>{{saying.text}}</p></fieldset></li>`
})
var saying = new Vue({
	el:'#saying',
	data:{
		lists:[
			{id:0,title:'业精于勤',text:'“业精于勤荒于嬉”，精深的业技靠的是勤学、刻苦努力，靠的是争分夺秒的勤学苦练才会有精深的技术。得在认真，失在随便。'},
			{id:1,title:'学无止境',text:'学习，探索，研究，从不了解到了解，从无知到掌握，到灵活运用，在不断的学习中加深认识。由浅入深，由表及里。'},
			{id:2,title:'工匠精神',text:'精益求精，注重细节，追求完美和极致，不惜花费时间精力，孜孜不倦，反复改进产品，把99%提高到99.99%。'}
		]
	}
})
/*文章的导航*/
Vue.component('title-nav',{/*一定不要用驼峰式命名法，坑死了*/
	props:['todo'],/*父级一个属性传递到子集li标签里边*/
	template:`<li>
				<img class="img_title" v-show="todo.show" :src="todo.img" alt="" />
				<a href="article.html"><div :class="{div_haveimg:todo.show}">{{todo.title}}</div></a>
				<detil>
					<figure>
						<a href="###"><figcaption>{{todo.type}}</figcaption></a>
							<i>{{todo.number}}</i>
							<img class="img_comment" src="image/评论.png" alt="评论数" />
					</figure>
				</detil>
			</li>`/*调用父级属性里边存的对象数据*/
})
// 右边栏小信息的框架组件
Vue.component('side-info',{/*一定不要用驼峰式命名法，坑死了*/
	props:['todo'],/*父级一个属性传递到子集li标签里边*/
	template:`<li>
	<div class="side_title">博主信息</div>
	<ol class="side_content"><li v-for="news in todo">{{news.message}}</li></ol>
	</li>`
})
var title_nav = new Vue({
	el:'#main_content',
	data:{
		title_nav:'title_nav',
		news_aside:'news_aside',
		lists:[
			{id:0,show:false,title:'无法启动此程序，因为计算机中丢失MSVCP120.dll。尝试重新安装此程序以解决此问题。',type:'杂谈',number:2},
			{id:1,show:true,img:"image/img_title1.png",title:'无法启动此程序，因为计算机中丢失MSVCP120.dll。尝试重新安装此程序以解决此问题。荒于嬉',type:'web前端',number:2},
			{id:2,show:false,title:'行成于思',type:'杂谈',number:2}
		],
		new_lists:[
			{id:0,message:"姓名：刘煜"},
			{id:1,message:"职业：web前端工程师、学生"},
			{id:2,message:"座右铭：心之所向，无往不成"},
			{id:3,message:"邮箱：liuyuweb@qq.com"}
		]
	}
})

