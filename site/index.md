---
layout: default
---

<main>

# This is just a landing page for convenience

Property pages are here: 
<ul>

{% for item in myData %}
<li><a href="my-data/{{item.property}}">Property {{item.property}}</a></li>
{% endfor %}

</ul>

</main>
