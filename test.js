function out()
{
    x = document.getElementById("text")
    x.innerHTML = "<p>JavaScript 能够直接写入 HTML 输出流中：</p>" + "<h1>这是一个标题</h1>" + "<p>这是一个段落</p>";
    // x.innerHTML = "<h1>这是一个标题</h1>";
    // document.write("<p>JavaScript 能够直接写入 HTML 输出流中：</p>");
    // document.write("<h1>这是一个标题</h1>");
    // document.write("<p>这是一个段落</p>");
}

function test()
{
	x = document.getElementById("pic")
	if (x.src.match("0002"))
	{
        x.src = "./002.jpg"
		x.width = "448"
		x.height = "448"
	}
	else
	{
        x.src = "./0002.jpg"
		x.width = "224"
		x.height = "224"
	}
}

function changecolor()
{
    x = document.getElementById("cc")
    x.style.color = "#00ff00"
}