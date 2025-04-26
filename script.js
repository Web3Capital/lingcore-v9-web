<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2575.4">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">let apiKey = "";</p>
<p class="p2"><br></p>
<p class="p1">function saveApiKey() {</p>
<p class="p1"><span class="Apple-converted-space">  </span>apiKey = document.getElementById("apiKeyInput").value;</p>
<p class="p1"><span class="Apple-converted-space">  </span>alert("API Key saved! Start chatting.");</p>
<p class="p1">}</p>
<p class="p2"><br></p>
<p class="p1">async function sendMessage() {</p>
<p class="p1"><span class="Apple-converted-space">  </span>const input = document.getElementById("userInput").value;</p>
<p class="p1"><span class="Apple-converted-space">  </span>document.getElementById("userInput").value = "";</p>
<p class="p2"><span class="Apple-converted-space">  </span></p>
<p class="p1"><span class="Apple-converted-space">  </span>if (!input) return;</p>
<p class="p2"><span class="Apple-converted-space">  </span></p>
<p class="p1"><span class="Apple-converted-space">  </span>const chatBox = document.getElementById("chatBox");</p>
<p class="p1"><span class="Apple-converted-space">  </span>chatBox.innerHTML += `&lt;div&gt;&lt;strong&gt;You:&lt;/strong&gt; ${input}&lt;/div&gt;`;</p>
<p class="p2"><span class="Apple-converted-space">  </span></p>
<p class="p1"><span class="Apple-converted-space">  </span>const response = await fetch('https://api.mistral.ai/v1/chat/completions', {</p>
<p class="p1"><span class="Apple-converted-space">    </span>method: 'POST',</p>
<p class="p1"><span class="Apple-converted-space">    </span>headers: {</p>
<p class="p1"><span class="Apple-converted-space">      </span>'Authorization': `Bearer ${apiKey}`,</p>
<p class="p1"><span class="Apple-converted-space">      </span>'Content-Type': 'application/json'</p>
<p class="p1"><span class="Apple-converted-space">    </span>},</p>
<p class="p1"><span class="Apple-converted-space">    </span>body: JSON.stringify({</p>
<p class="p1"><span class="Apple-converted-space">      </span>model: "mistral-large-latest",</p>
<p class="p1"><span class="Apple-converted-space">      </span>messages: [{ role: "user", content: input }]</p>
<p class="p1"><span class="Apple-converted-space">    </span>})</p>
<p class="p1"><span class="Apple-converted-space">  </span>});</p>
<p class="p2"><span class="Apple-converted-space">  </span></p>
<p class="p1"><span class="Apple-converted-space">  </span>const data = await response.json();</p>
<p class="p1"><span class="Apple-converted-space">  </span>const reply = data.choices[0].message.content;</p>
<p class="p2"><span class="Apple-converted-space">  </span></p>
<p class="p1"><span class="Apple-converted-space">  </span>chatBox.innerHTML += `&lt;div&gt;&lt;strong&gt;Lingcore:&lt;/strong&gt; ${reply}&lt;/div&gt;`;</p>
<p class="p1"><span class="Apple-converted-space">  </span>chatBox.scrollTop = chatBox.scrollHeight;</p>
<p class="p1">}</p>
</body>
</html>
