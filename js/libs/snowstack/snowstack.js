



<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link rel="icon" type="image/vnd.microsoft.icon" href="http://www.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 
 
 
 var codesite_token = "KQa4gkCb2FaUYWQbeFREGQ8Iea4:1336450761320";
 
 
 var CS_env = {"profileUrl":["/u/114099803274805928637/"],"token":"KQa4gkCb2FaUYWQbeFREGQ8Iea4:1336450761320","assetHostPath":"http://www.gstatic.com/codesite/ph","domainName":null,"assetVersionPath":"http://www.gstatic.com/codesite/ph/1135055050189452583","projectHomeUrl":"/p/css-vfx","relativeBaseUrl":"","projectName":"css-vfx","loggedInUserEmail":"VictorVuc@gmail.com"};
 var _gaq = _gaq || [];
 _gaq.push(
 ['siteTracker._setAccount', 'UA-18071-1'],
 ['siteTracker._trackPageview']);
 
 _gaq.push(
 ['projectTracker._setAccount', 'UA-2934591-9'],
 ['projectTracker._trackPageview']);
 
 (function() {
 var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
 (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
 })();
 
 </script>
 
 
 <title>snowstack.js - 
 css-vfx -
 
 
 3D CSS Visual Effects for WebKit - Google Project Hosting
 </title>
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/1135055050189452583/css/core.css">
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/1135055050189452583/css/ph_detail.css" >
 
 
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/1135055050189452583/css/d_sb.css" >
 
 
 
<!--[if IE]>
 <link type="text/css" rel="stylesheet" href="http://www.gstatic.com/codesite/ph/1135055050189452583/css/d_ie.css" >
<![endif]-->
 <style type="text/css">
 .menuIcon.off { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -42px }
 .menuIcon.on { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -28px }
 .menuIcon.down { background: no-repeat url(http://www.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 0; }
 
 
 
  tr.inline_comment {
 background: #fff;
 vertical-align: top;
 }
 div.draft, div.published {
 padding: .3em;
 border: 1px solid #999; 
 margin-bottom: .1em;
 font-family: arial, sans-serif;
 max-width: 60em;
 }
 div.draft {
 background: #ffa;
 } 
 div.published {
 background: #e5ecf9;
 }
 div.published .body, div.draft .body {
 padding: .5em .1em .1em .1em;
 max-width: 60em;
 white-space: pre-wrap;
 white-space: -moz-pre-wrap;
 white-space: -pre-wrap;
 white-space: -o-pre-wrap;
 word-wrap: break-word;
 font-size: 1em;
 }
 div.draft .actions {
 margin-left: 1em;
 font-size: 90%;
 }
 div.draft form {
 padding: .5em .5em .5em 0;
 }
 div.draft textarea, div.published textarea {
 width: 95%;
 height: 10em;
 font-family: arial, sans-serif;
 margin-bottom: .5em;
 }

 
 .nocursor, .nocursor td, .cursor_hidden, .cursor_hidden td {
 background-color: white;
 height: 2px;
 }
 .cursor, .cursor td {
 background-color: darkblue;
 height: 2px;
 display: '';
 }
 
 
.list {
 border: 1px solid white;
 border-bottom: 0;
}

 
 </style>
</head>
<body class="t4">
<script type="text/javascript">
 window.___gcfg = {lang: 'en'};
 (function() 
 {var po = document.createElement("script");
 po.type = "text/javascript"; po.async = true;po.src = "https://apis.google.com/js/plusone.js";
 var s = document.getElementsByTagName("script")[0];
 s.parentNode.insertBefore(po, s);
 })();
</script>
<div class="headbg">

 <div id="gaia">
 

 <span>
 
 
 <b>VictorVuc@gmail.com</b>
 
 
 | <a href="/u/114099803274805928637/" id="projects-dropdown" onclick="return false;"
 ><u>My favorites</u> <small>&#9660;</small></a>
 | <a href="/u/114099803274805928637/" onclick="_CS_click('/gb/ph/profile');"
 title="Profile, Updates, and Settings"
 ><u>Profile</u></a>
 | <a href="https://www.google.com/accounts/Logout?continue=http%3A%2F%2Fcode.google.com%2Fp%2Fcss-vfx%2Fsource%2Fbrowse%2Ftrunk%2Fsnowstack%2Fsnowstack.js" 
 onclick="_CS_click('/gb/ph/signout');"
 ><u>Sign out</u></a>
 
 </span>

 </div>

 <div class="gbh" style="left: 0pt;"></div>
 <div class="gbh" style="right: 0pt;"></div>
 
 
 <div style="height: 1px"></div>
<!--[if lte IE 7]>
<div style="text-align:center;">
Your version of Internet Explorer is not supported. Try a browser that
contributes to open source, such as <a href="http://www.firefox.com">Firefox</a>,
<a href="http://www.google.com/chrome">Google Chrome</a>, or
<a href="http://code.google.com/chrome/chromeframe/">Google Chrome Frame</a>.
</div>
<![endif]-->



 <table style="padding:0px; margin: 0px 0px 10px 0px; width:100%" cellpadding="0" cellspacing="0"
 itemscope itemtype="http://schema.org/CreativeWork">
 <tr style="height: 58px;">
 
 <td id="plogo">
 <link itemprop="url" href="/p/css-vfx">
 <a href="/p/css-vfx/">
 
 <img src="http://www.gstatic.com/codesite/ph/images/defaultlogo.png" alt="Logo" itemprop="image">
 
 </a>
 </td>
 
 <td style="padding-left: 0.5em">
 
 <div id="pname">
 <a href="/p/css-vfx/"><span itemprop="name">css-vfx</span></a>
 </div>
 
 <div id="psum">
 <a id="project_summary_link"
 href="/p/css-vfx/"><span itemprop="description">3D CSS Visual Effects for WebKit</span></a>
 
 </div>
 
 
 </td>
 <td style="white-space:nowrap;text-align:right; vertical-align:bottom;">
 
 <form action="/hosting/search">
 <input size="30" name="q" value="" type="text">
 
 <input type="submit" name="projectsearch" value="Search projects" >
 </form>
 
 </tr>
 </table>

</div>

 
<div id="mt" class="gtb"> 
 <a href="/p/css-vfx/" class="tab ">Project&nbsp;Home</a>
 
 
 
 
 <a href="/p/css-vfx/downloads/list" class="tab ">Downloads</a>
 
 
 
 
 
 <a href="/p/css-vfx/w/list" class="tab ">Wiki</a>
 
 
 
 
 
 <a href="/p/css-vfx/issues/list"
 class="tab ">Issues</a>
 
 
 
 
 
 <a href="/p/css-vfx/source/checkout"
 class="tab active">Source</a>
 
 
 
 
 
 <div class=gtbc></div>
</div>
<table cellspacing="0" cellpadding="0" width="100%" align="center" border="0" class="st">
 <tr>
 
 
 
 
 
 
 <td class="subt">
 <div class="st2">
 <div class="isf">
 
 


 <span class="inst1"><a href="/p/css-vfx/source/checkout">Checkout</a></span> &nbsp;
 <span class="inst2"><a href="/p/css-vfx/source/browse/">Browse</a></span> &nbsp;
 <span class="inst3"><a href="/p/css-vfx/source/list">Changes</a></span> &nbsp;
 
 &nbsp;
 
 <form action="/p/css-vfx/source/search" method="get" style="display:inline"
 onsubmit="document.getElementById('codesearchq').value = document.getElementById('origq').value">
 <input type="hidden" name="q" id="codesearchq" value="">
 <input type="text" maxlength="2048" size="38" id="origq" name="origq" value="" title="Google Code Search" style="font-size:92%">&nbsp;<input type="submit" value="Search Trunk" name="btnG" style="font-size:92%">
 
 
 
 
 
 
 </form>
 </div>
</div>

 </td>
 
 
 
 <td align="right" valign="top" class="bevel-right"></td>
 </tr>
</table>


<script type="text/javascript">
 var cancelBubble = false;
 function _go(url) { document.location = url; }
</script>
<div id="maincol"
 
>

 
<!-- IE -->




<div class="expand">
<div id="colcontrol">
<style type="text/css">
 #file_flipper { white-space: nowrap; padding-right: 2em; }
 #file_flipper.hidden { display: none; }
 #file_flipper .pagelink { color: #0000CC; text-decoration: underline; }
 #file_flipper #visiblefiles { padding-left: 0.5em; padding-right: 0.5em; }
</style>
<table id="nav_and_rev" class="list"
 cellpadding="0" cellspacing="0" width="100%">
 <tr>
 
 <td nowrap="nowrap" class="src_crumbs src_nav" width="33%">
 <strong class="src_nav">Source path:&nbsp;</strong>
 <span id="crumb_root">
 
 <a href="/p/css-vfx/source/browse/">svn</a>/&nbsp;</span>
 <span id="crumb_links" class="ifClosed"><a href="/p/css-vfx/source/browse/trunk/">trunk</a><span class="sp">/&nbsp;</span><a href="/p/css-vfx/source/browse/trunk/snowstack/">snowstack</a><span class="sp">/&nbsp;</span>snowstack.js</span>
 
 

 </td>
 
 
 <td nowrap="nowrap" width="33%" align="center">
 <a href="/p/css-vfx/source/browse/trunk/snowstack/snowstack.js?edit=1"
 ><img src="http://www.gstatic.com/codesite/ph/images/pencil-y14.png"
 class="edit_icon">Edit file</a>
 </td>
 
 
 <td nowrap="nowrap" width="33%" align="right">
 <table cellpadding="0" cellspacing="0" style="font-size: 100%"><tr>
 
 
 <td class="flipper">
 <ul class="leftside">
 
 <li><a href="/p/css-vfx/source/browse/trunk/snowstack/snowstack.js?r=75" title="Previous">&lsaquo;r75</a></li>
 
 </ul>
 </td>
 
 <td class="flipper"><b>r78</b></td>
 
 </tr></table>
 </td> 
 </tr>
</table>

<div class="fc">
 
 
 
<style type="text/css">
.undermouse span {
 background-image: url(http://www.gstatic.com/codesite/ph/images/comments.gif); }
</style>
<table class="opened" id="review_comment_area"
><tr>
<td id="nums">
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
<pre><table width="100%" id="nums_table_0"><tr id="gr_svn78_1"

><td id="1"><a href="#1">1</a></td></tr
><tr id="gr_svn78_2"

><td id="2"><a href="#2">2</a></td></tr
><tr id="gr_svn78_3"

><td id="3"><a href="#3">3</a></td></tr
><tr id="gr_svn78_4"

><td id="4"><a href="#4">4</a></td></tr
><tr id="gr_svn78_5"

><td id="5"><a href="#5">5</a></td></tr
><tr id="gr_svn78_6"

><td id="6"><a href="#6">6</a></td></tr
><tr id="gr_svn78_7"

><td id="7"><a href="#7">7</a></td></tr
><tr id="gr_svn78_8"

><td id="8"><a href="#8">8</a></td></tr
><tr id="gr_svn78_9"

><td id="9"><a href="#9">9</a></td></tr
><tr id="gr_svn78_10"

><td id="10"><a href="#10">10</a></td></tr
><tr id="gr_svn78_11"

><td id="11"><a href="#11">11</a></td></tr
><tr id="gr_svn78_12"

><td id="12"><a href="#12">12</a></td></tr
><tr id="gr_svn78_13"

><td id="13"><a href="#13">13</a></td></tr
><tr id="gr_svn78_14"

><td id="14"><a href="#14">14</a></td></tr
><tr id="gr_svn78_15"

><td id="15"><a href="#15">15</a></td></tr
><tr id="gr_svn78_16"

><td id="16"><a href="#16">16</a></td></tr
><tr id="gr_svn78_17"

><td id="17"><a href="#17">17</a></td></tr
><tr id="gr_svn78_18"

><td id="18"><a href="#18">18</a></td></tr
><tr id="gr_svn78_19"

><td id="19"><a href="#19">19</a></td></tr
><tr id="gr_svn78_20"

><td id="20"><a href="#20">20</a></td></tr
><tr id="gr_svn78_21"

><td id="21"><a href="#21">21</a></td></tr
><tr id="gr_svn78_22"

><td id="22"><a href="#22">22</a></td></tr
><tr id="gr_svn78_23"

><td id="23"><a href="#23">23</a></td></tr
><tr id="gr_svn78_24"

><td id="24"><a href="#24">24</a></td></tr
><tr id="gr_svn78_25"

><td id="25"><a href="#25">25</a></td></tr
><tr id="gr_svn78_26"

><td id="26"><a href="#26">26</a></td></tr
><tr id="gr_svn78_27"

><td id="27"><a href="#27">27</a></td></tr
><tr id="gr_svn78_28"

><td id="28"><a href="#28">28</a></td></tr
><tr id="gr_svn78_29"

><td id="29"><a href="#29">29</a></td></tr
><tr id="gr_svn78_30"

><td id="30"><a href="#30">30</a></td></tr
><tr id="gr_svn78_31"

><td id="31"><a href="#31">31</a></td></tr
><tr id="gr_svn78_32"

><td id="32"><a href="#32">32</a></td></tr
><tr id="gr_svn78_33"

><td id="33"><a href="#33">33</a></td></tr
><tr id="gr_svn78_34"

><td id="34"><a href="#34">34</a></td></tr
><tr id="gr_svn78_35"

><td id="35"><a href="#35">35</a></td></tr
><tr id="gr_svn78_36"

><td id="36"><a href="#36">36</a></td></tr
><tr id="gr_svn78_37"

><td id="37"><a href="#37">37</a></td></tr
><tr id="gr_svn78_38"

><td id="38"><a href="#38">38</a></td></tr
><tr id="gr_svn78_39"

><td id="39"><a href="#39">39</a></td></tr
><tr id="gr_svn78_40"

><td id="40"><a href="#40">40</a></td></tr
><tr id="gr_svn78_41"

><td id="41"><a href="#41">41</a></td></tr
><tr id="gr_svn78_42"

><td id="42"><a href="#42">42</a></td></tr
><tr id="gr_svn78_43"

><td id="43"><a href="#43">43</a></td></tr
><tr id="gr_svn78_44"

><td id="44"><a href="#44">44</a></td></tr
><tr id="gr_svn78_45"

><td id="45"><a href="#45">45</a></td></tr
><tr id="gr_svn78_46"

><td id="46"><a href="#46">46</a></td></tr
><tr id="gr_svn78_47"

><td id="47"><a href="#47">47</a></td></tr
><tr id="gr_svn78_48"

><td id="48"><a href="#48">48</a></td></tr
><tr id="gr_svn78_49"

><td id="49"><a href="#49">49</a></td></tr
><tr id="gr_svn78_50"

><td id="50"><a href="#50">50</a></td></tr
><tr id="gr_svn78_51"

><td id="51"><a href="#51">51</a></td></tr
><tr id="gr_svn78_52"

><td id="52"><a href="#52">52</a></td></tr
><tr id="gr_svn78_53"

><td id="53"><a href="#53">53</a></td></tr
><tr id="gr_svn78_54"

><td id="54"><a href="#54">54</a></td></tr
><tr id="gr_svn78_55"

><td id="55"><a href="#55">55</a></td></tr
><tr id="gr_svn78_56"

><td id="56"><a href="#56">56</a></td></tr
><tr id="gr_svn78_57"

><td id="57"><a href="#57">57</a></td></tr
><tr id="gr_svn78_58"

><td id="58"><a href="#58">58</a></td></tr
><tr id="gr_svn78_59"

><td id="59"><a href="#59">59</a></td></tr
><tr id="gr_svn78_60"

><td id="60"><a href="#60">60</a></td></tr
><tr id="gr_svn78_61"

><td id="61"><a href="#61">61</a></td></tr
><tr id="gr_svn78_62"

><td id="62"><a href="#62">62</a></td></tr
><tr id="gr_svn78_63"

><td id="63"><a href="#63">63</a></td></tr
><tr id="gr_svn78_64"

><td id="64"><a href="#64">64</a></td></tr
><tr id="gr_svn78_65"

><td id="65"><a href="#65">65</a></td></tr
><tr id="gr_svn78_66"

><td id="66"><a href="#66">66</a></td></tr
><tr id="gr_svn78_67"

><td id="67"><a href="#67">67</a></td></tr
><tr id="gr_svn78_68"

><td id="68"><a href="#68">68</a></td></tr
><tr id="gr_svn78_69"

><td id="69"><a href="#69">69</a></td></tr
><tr id="gr_svn78_70"

><td id="70"><a href="#70">70</a></td></tr
><tr id="gr_svn78_71"

><td id="71"><a href="#71">71</a></td></tr
><tr id="gr_svn78_72"

><td id="72"><a href="#72">72</a></td></tr
><tr id="gr_svn78_73"

><td id="73"><a href="#73">73</a></td></tr
><tr id="gr_svn78_74"

><td id="74"><a href="#74">74</a></td></tr
><tr id="gr_svn78_75"

><td id="75"><a href="#75">75</a></td></tr
><tr id="gr_svn78_76"

><td id="76"><a href="#76">76</a></td></tr
><tr id="gr_svn78_77"

><td id="77"><a href="#77">77</a></td></tr
><tr id="gr_svn78_78"

><td id="78"><a href="#78">78</a></td></tr
><tr id="gr_svn78_79"

><td id="79"><a href="#79">79</a></td></tr
><tr id="gr_svn78_80"

><td id="80"><a href="#80">80</a></td></tr
><tr id="gr_svn78_81"

><td id="81"><a href="#81">81</a></td></tr
><tr id="gr_svn78_82"

><td id="82"><a href="#82">82</a></td></tr
><tr id="gr_svn78_83"

><td id="83"><a href="#83">83</a></td></tr
><tr id="gr_svn78_84"

><td id="84"><a href="#84">84</a></td></tr
><tr id="gr_svn78_85"

><td id="85"><a href="#85">85</a></td></tr
><tr id="gr_svn78_86"

><td id="86"><a href="#86">86</a></td></tr
><tr id="gr_svn78_87"

><td id="87"><a href="#87">87</a></td></tr
><tr id="gr_svn78_88"

><td id="88"><a href="#88">88</a></td></tr
><tr id="gr_svn78_89"

><td id="89"><a href="#89">89</a></td></tr
><tr id="gr_svn78_90"

><td id="90"><a href="#90">90</a></td></tr
><tr id="gr_svn78_91"

><td id="91"><a href="#91">91</a></td></tr
><tr id="gr_svn78_92"

><td id="92"><a href="#92">92</a></td></tr
><tr id="gr_svn78_93"

><td id="93"><a href="#93">93</a></td></tr
><tr id="gr_svn78_94"

><td id="94"><a href="#94">94</a></td></tr
><tr id="gr_svn78_95"

><td id="95"><a href="#95">95</a></td></tr
><tr id="gr_svn78_96"

><td id="96"><a href="#96">96</a></td></tr
><tr id="gr_svn78_97"

><td id="97"><a href="#97">97</a></td></tr
><tr id="gr_svn78_98"

><td id="98"><a href="#98">98</a></td></tr
><tr id="gr_svn78_99"

><td id="99"><a href="#99">99</a></td></tr
><tr id="gr_svn78_100"

><td id="100"><a href="#100">100</a></td></tr
><tr id="gr_svn78_101"

><td id="101"><a href="#101">101</a></td></tr
><tr id="gr_svn78_102"

><td id="102"><a href="#102">102</a></td></tr
><tr id="gr_svn78_103"

><td id="103"><a href="#103">103</a></td></tr
><tr id="gr_svn78_104"

><td id="104"><a href="#104">104</a></td></tr
><tr id="gr_svn78_105"

><td id="105"><a href="#105">105</a></td></tr
><tr id="gr_svn78_106"

><td id="106"><a href="#106">106</a></td></tr
><tr id="gr_svn78_107"

><td id="107"><a href="#107">107</a></td></tr
><tr id="gr_svn78_108"

><td id="108"><a href="#108">108</a></td></tr
><tr id="gr_svn78_109"

><td id="109"><a href="#109">109</a></td></tr
><tr id="gr_svn78_110"

><td id="110"><a href="#110">110</a></td></tr
><tr id="gr_svn78_111"

><td id="111"><a href="#111">111</a></td></tr
><tr id="gr_svn78_112"

><td id="112"><a href="#112">112</a></td></tr
><tr id="gr_svn78_113"

><td id="113"><a href="#113">113</a></td></tr
><tr id="gr_svn78_114"

><td id="114"><a href="#114">114</a></td></tr
><tr id="gr_svn78_115"

><td id="115"><a href="#115">115</a></td></tr
><tr id="gr_svn78_116"

><td id="116"><a href="#116">116</a></td></tr
><tr id="gr_svn78_117"

><td id="117"><a href="#117">117</a></td></tr
><tr id="gr_svn78_118"

><td id="118"><a href="#118">118</a></td></tr
><tr id="gr_svn78_119"

><td id="119"><a href="#119">119</a></td></tr
><tr id="gr_svn78_120"

><td id="120"><a href="#120">120</a></td></tr
><tr id="gr_svn78_121"

><td id="121"><a href="#121">121</a></td></tr
><tr id="gr_svn78_122"

><td id="122"><a href="#122">122</a></td></tr
><tr id="gr_svn78_123"

><td id="123"><a href="#123">123</a></td></tr
><tr id="gr_svn78_124"

><td id="124"><a href="#124">124</a></td></tr
><tr id="gr_svn78_125"

><td id="125"><a href="#125">125</a></td></tr
><tr id="gr_svn78_126"

><td id="126"><a href="#126">126</a></td></tr
><tr id="gr_svn78_127"

><td id="127"><a href="#127">127</a></td></tr
><tr id="gr_svn78_128"

><td id="128"><a href="#128">128</a></td></tr
><tr id="gr_svn78_129"

><td id="129"><a href="#129">129</a></td></tr
><tr id="gr_svn78_130"

><td id="130"><a href="#130">130</a></td></tr
><tr id="gr_svn78_131"

><td id="131"><a href="#131">131</a></td></tr
><tr id="gr_svn78_132"

><td id="132"><a href="#132">132</a></td></tr
><tr id="gr_svn78_133"

><td id="133"><a href="#133">133</a></td></tr
><tr id="gr_svn78_134"

><td id="134"><a href="#134">134</a></td></tr
><tr id="gr_svn78_135"

><td id="135"><a href="#135">135</a></td></tr
><tr id="gr_svn78_136"

><td id="136"><a href="#136">136</a></td></tr
><tr id="gr_svn78_137"

><td id="137"><a href="#137">137</a></td></tr
><tr id="gr_svn78_138"

><td id="138"><a href="#138">138</a></td></tr
><tr id="gr_svn78_139"

><td id="139"><a href="#139">139</a></td></tr
><tr id="gr_svn78_140"

><td id="140"><a href="#140">140</a></td></tr
><tr id="gr_svn78_141"

><td id="141"><a href="#141">141</a></td></tr
><tr id="gr_svn78_142"

><td id="142"><a href="#142">142</a></td></tr
><tr id="gr_svn78_143"

><td id="143"><a href="#143">143</a></td></tr
><tr id="gr_svn78_144"

><td id="144"><a href="#144">144</a></td></tr
><tr id="gr_svn78_145"

><td id="145"><a href="#145">145</a></td></tr
><tr id="gr_svn78_146"

><td id="146"><a href="#146">146</a></td></tr
><tr id="gr_svn78_147"

><td id="147"><a href="#147">147</a></td></tr
><tr id="gr_svn78_148"

><td id="148"><a href="#148">148</a></td></tr
><tr id="gr_svn78_149"

><td id="149"><a href="#149">149</a></td></tr
><tr id="gr_svn78_150"

><td id="150"><a href="#150">150</a></td></tr
><tr id="gr_svn78_151"

><td id="151"><a href="#151">151</a></td></tr
><tr id="gr_svn78_152"

><td id="152"><a href="#152">152</a></td></tr
><tr id="gr_svn78_153"

><td id="153"><a href="#153">153</a></td></tr
><tr id="gr_svn78_154"

><td id="154"><a href="#154">154</a></td></tr
><tr id="gr_svn78_155"

><td id="155"><a href="#155">155</a></td></tr
><tr id="gr_svn78_156"

><td id="156"><a href="#156">156</a></td></tr
><tr id="gr_svn78_157"

><td id="157"><a href="#157">157</a></td></tr
><tr id="gr_svn78_158"

><td id="158"><a href="#158">158</a></td></tr
><tr id="gr_svn78_159"

><td id="159"><a href="#159">159</a></td></tr
><tr id="gr_svn78_160"

><td id="160"><a href="#160">160</a></td></tr
><tr id="gr_svn78_161"

><td id="161"><a href="#161">161</a></td></tr
><tr id="gr_svn78_162"

><td id="162"><a href="#162">162</a></td></tr
><tr id="gr_svn78_163"

><td id="163"><a href="#163">163</a></td></tr
><tr id="gr_svn78_164"

><td id="164"><a href="#164">164</a></td></tr
><tr id="gr_svn78_165"

><td id="165"><a href="#165">165</a></td></tr
><tr id="gr_svn78_166"

><td id="166"><a href="#166">166</a></td></tr
><tr id="gr_svn78_167"

><td id="167"><a href="#167">167</a></td></tr
><tr id="gr_svn78_168"

><td id="168"><a href="#168">168</a></td></tr
><tr id="gr_svn78_169"

><td id="169"><a href="#169">169</a></td></tr
><tr id="gr_svn78_170"

><td id="170"><a href="#170">170</a></td></tr
><tr id="gr_svn78_171"

><td id="171"><a href="#171">171</a></td></tr
><tr id="gr_svn78_172"

><td id="172"><a href="#172">172</a></td></tr
><tr id="gr_svn78_173"

><td id="173"><a href="#173">173</a></td></tr
><tr id="gr_svn78_174"

><td id="174"><a href="#174">174</a></td></tr
><tr id="gr_svn78_175"

><td id="175"><a href="#175">175</a></td></tr
><tr id="gr_svn78_176"

><td id="176"><a href="#176">176</a></td></tr
><tr id="gr_svn78_177"

><td id="177"><a href="#177">177</a></td></tr
><tr id="gr_svn78_178"

><td id="178"><a href="#178">178</a></td></tr
><tr id="gr_svn78_179"

><td id="179"><a href="#179">179</a></td></tr
><tr id="gr_svn78_180"

><td id="180"><a href="#180">180</a></td></tr
><tr id="gr_svn78_181"

><td id="181"><a href="#181">181</a></td></tr
><tr id="gr_svn78_182"

><td id="182"><a href="#182">182</a></td></tr
><tr id="gr_svn78_183"

><td id="183"><a href="#183">183</a></td></tr
><tr id="gr_svn78_184"

><td id="184"><a href="#184">184</a></td></tr
><tr id="gr_svn78_185"

><td id="185"><a href="#185">185</a></td></tr
><tr id="gr_svn78_186"

><td id="186"><a href="#186">186</a></td></tr
><tr id="gr_svn78_187"

><td id="187"><a href="#187">187</a></td></tr
><tr id="gr_svn78_188"

><td id="188"><a href="#188">188</a></td></tr
><tr id="gr_svn78_189"

><td id="189"><a href="#189">189</a></td></tr
><tr id="gr_svn78_190"

><td id="190"><a href="#190">190</a></td></tr
><tr id="gr_svn78_191"

><td id="191"><a href="#191">191</a></td></tr
><tr id="gr_svn78_192"

><td id="192"><a href="#192">192</a></td></tr
><tr id="gr_svn78_193"

><td id="193"><a href="#193">193</a></td></tr
><tr id="gr_svn78_194"

><td id="194"><a href="#194">194</a></td></tr
><tr id="gr_svn78_195"

><td id="195"><a href="#195">195</a></td></tr
><tr id="gr_svn78_196"

><td id="196"><a href="#196">196</a></td></tr
><tr id="gr_svn78_197"

><td id="197"><a href="#197">197</a></td></tr
><tr id="gr_svn78_198"

><td id="198"><a href="#198">198</a></td></tr
><tr id="gr_svn78_199"

><td id="199"><a href="#199">199</a></td></tr
><tr id="gr_svn78_200"

><td id="200"><a href="#200">200</a></td></tr
><tr id="gr_svn78_201"

><td id="201"><a href="#201">201</a></td></tr
><tr id="gr_svn78_202"

><td id="202"><a href="#202">202</a></td></tr
><tr id="gr_svn78_203"

><td id="203"><a href="#203">203</a></td></tr
><tr id="gr_svn78_204"

><td id="204"><a href="#204">204</a></td></tr
><tr id="gr_svn78_205"

><td id="205"><a href="#205">205</a></td></tr
><tr id="gr_svn78_206"

><td id="206"><a href="#206">206</a></td></tr
><tr id="gr_svn78_207"

><td id="207"><a href="#207">207</a></td></tr
><tr id="gr_svn78_208"

><td id="208"><a href="#208">208</a></td></tr
><tr id="gr_svn78_209"

><td id="209"><a href="#209">209</a></td></tr
><tr id="gr_svn78_210"

><td id="210"><a href="#210">210</a></td></tr
><tr id="gr_svn78_211"

><td id="211"><a href="#211">211</a></td></tr
><tr id="gr_svn78_212"

><td id="212"><a href="#212">212</a></td></tr
><tr id="gr_svn78_213"

><td id="213"><a href="#213">213</a></td></tr
><tr id="gr_svn78_214"

><td id="214"><a href="#214">214</a></td></tr
><tr id="gr_svn78_215"

><td id="215"><a href="#215">215</a></td></tr
><tr id="gr_svn78_216"

><td id="216"><a href="#216">216</a></td></tr
><tr id="gr_svn78_217"

><td id="217"><a href="#217">217</a></td></tr
><tr id="gr_svn78_218"

><td id="218"><a href="#218">218</a></td></tr
><tr id="gr_svn78_219"

><td id="219"><a href="#219">219</a></td></tr
><tr id="gr_svn78_220"

><td id="220"><a href="#220">220</a></td></tr
><tr id="gr_svn78_221"

><td id="221"><a href="#221">221</a></td></tr
><tr id="gr_svn78_222"

><td id="222"><a href="#222">222</a></td></tr
><tr id="gr_svn78_223"

><td id="223"><a href="#223">223</a></td></tr
><tr id="gr_svn78_224"

><td id="224"><a href="#224">224</a></td></tr
><tr id="gr_svn78_225"

><td id="225"><a href="#225">225</a></td></tr
><tr id="gr_svn78_226"

><td id="226"><a href="#226">226</a></td></tr
><tr id="gr_svn78_227"

><td id="227"><a href="#227">227</a></td></tr
><tr id="gr_svn78_228"

><td id="228"><a href="#228">228</a></td></tr
><tr id="gr_svn78_229"

><td id="229"><a href="#229">229</a></td></tr
><tr id="gr_svn78_230"

><td id="230"><a href="#230">230</a></td></tr
><tr id="gr_svn78_231"

><td id="231"><a href="#231">231</a></td></tr
><tr id="gr_svn78_232"

><td id="232"><a href="#232">232</a></td></tr
><tr id="gr_svn78_233"

><td id="233"><a href="#233">233</a></td></tr
><tr id="gr_svn78_234"

><td id="234"><a href="#234">234</a></td></tr
><tr id="gr_svn78_235"

><td id="235"><a href="#235">235</a></td></tr
><tr id="gr_svn78_236"

><td id="236"><a href="#236">236</a></td></tr
><tr id="gr_svn78_237"

><td id="237"><a href="#237">237</a></td></tr
><tr id="gr_svn78_238"

><td id="238"><a href="#238">238</a></td></tr
><tr id="gr_svn78_239"

><td id="239"><a href="#239">239</a></td></tr
><tr id="gr_svn78_240"

><td id="240"><a href="#240">240</a></td></tr
><tr id="gr_svn78_241"

><td id="241"><a href="#241">241</a></td></tr
><tr id="gr_svn78_242"

><td id="242"><a href="#242">242</a></td></tr
><tr id="gr_svn78_243"

><td id="243"><a href="#243">243</a></td></tr
><tr id="gr_svn78_244"

><td id="244"><a href="#244">244</a></td></tr
><tr id="gr_svn78_245"

><td id="245"><a href="#245">245</a></td></tr
><tr id="gr_svn78_246"

><td id="246"><a href="#246">246</a></td></tr
><tr id="gr_svn78_247"

><td id="247"><a href="#247">247</a></td></tr
><tr id="gr_svn78_248"

><td id="248"><a href="#248">248</a></td></tr
><tr id="gr_svn78_249"

><td id="249"><a href="#249">249</a></td></tr
><tr id="gr_svn78_250"

><td id="250"><a href="#250">250</a></td></tr
><tr id="gr_svn78_251"

><td id="251"><a href="#251">251</a></td></tr
><tr id="gr_svn78_252"

><td id="252"><a href="#252">252</a></td></tr
><tr id="gr_svn78_253"

><td id="253"><a href="#253">253</a></td></tr
><tr id="gr_svn78_254"

><td id="254"><a href="#254">254</a></td></tr
><tr id="gr_svn78_255"

><td id="255"><a href="#255">255</a></td></tr
><tr id="gr_svn78_256"

><td id="256"><a href="#256">256</a></td></tr
><tr id="gr_svn78_257"

><td id="257"><a href="#257">257</a></td></tr
><tr id="gr_svn78_258"

><td id="258"><a href="#258">258</a></td></tr
><tr id="gr_svn78_259"

><td id="259"><a href="#259">259</a></td></tr
><tr id="gr_svn78_260"

><td id="260"><a href="#260">260</a></td></tr
><tr id="gr_svn78_261"

><td id="261"><a href="#261">261</a></td></tr
><tr id="gr_svn78_262"

><td id="262"><a href="#262">262</a></td></tr
><tr id="gr_svn78_263"

><td id="263"><a href="#263">263</a></td></tr
><tr id="gr_svn78_264"

><td id="264"><a href="#264">264</a></td></tr
><tr id="gr_svn78_265"

><td id="265"><a href="#265">265</a></td></tr
><tr id="gr_svn78_266"

><td id="266"><a href="#266">266</a></td></tr
><tr id="gr_svn78_267"

><td id="267"><a href="#267">267</a></td></tr
><tr id="gr_svn78_268"

><td id="268"><a href="#268">268</a></td></tr
><tr id="gr_svn78_269"

><td id="269"><a href="#269">269</a></td></tr
><tr id="gr_svn78_270"

><td id="270"><a href="#270">270</a></td></tr
><tr id="gr_svn78_271"

><td id="271"><a href="#271">271</a></td></tr
><tr id="gr_svn78_272"

><td id="272"><a href="#272">272</a></td></tr
><tr id="gr_svn78_273"

><td id="273"><a href="#273">273</a></td></tr
><tr id="gr_svn78_274"

><td id="274"><a href="#274">274</a></td></tr
><tr id="gr_svn78_275"

><td id="275"><a href="#275">275</a></td></tr
><tr id="gr_svn78_276"

><td id="276"><a href="#276">276</a></td></tr
><tr id="gr_svn78_277"

><td id="277"><a href="#277">277</a></td></tr
><tr id="gr_svn78_278"

><td id="278"><a href="#278">278</a></td></tr
><tr id="gr_svn78_279"

><td id="279"><a href="#279">279</a></td></tr
><tr id="gr_svn78_280"

><td id="280"><a href="#280">280</a></td></tr
><tr id="gr_svn78_281"

><td id="281"><a href="#281">281</a></td></tr
><tr id="gr_svn78_282"

><td id="282"><a href="#282">282</a></td></tr
><tr id="gr_svn78_283"

><td id="283"><a href="#283">283</a></td></tr
><tr id="gr_svn78_284"

><td id="284"><a href="#284">284</a></td></tr
><tr id="gr_svn78_285"

><td id="285"><a href="#285">285</a></td></tr
><tr id="gr_svn78_286"

><td id="286"><a href="#286">286</a></td></tr
><tr id="gr_svn78_287"

><td id="287"><a href="#287">287</a></td></tr
><tr id="gr_svn78_288"

><td id="288"><a href="#288">288</a></td></tr
><tr id="gr_svn78_289"

><td id="289"><a href="#289">289</a></td></tr
><tr id="gr_svn78_290"

><td id="290"><a href="#290">290</a></td></tr
><tr id="gr_svn78_291"

><td id="291"><a href="#291">291</a></td></tr
><tr id="gr_svn78_292"

><td id="292"><a href="#292">292</a></td></tr
><tr id="gr_svn78_293"

><td id="293"><a href="#293">293</a></td></tr
><tr id="gr_svn78_294"

><td id="294"><a href="#294">294</a></td></tr
><tr id="gr_svn78_295"

><td id="295"><a href="#295">295</a></td></tr
><tr id="gr_svn78_296"

><td id="296"><a href="#296">296</a></td></tr
><tr id="gr_svn78_297"

><td id="297"><a href="#297">297</a></td></tr
><tr id="gr_svn78_298"

><td id="298"><a href="#298">298</a></td></tr
><tr id="gr_svn78_299"

><td id="299"><a href="#299">299</a></td></tr
><tr id="gr_svn78_300"

><td id="300"><a href="#300">300</a></td></tr
><tr id="gr_svn78_301"

><td id="301"><a href="#301">301</a></td></tr
><tr id="gr_svn78_302"

><td id="302"><a href="#302">302</a></td></tr
><tr id="gr_svn78_303"

><td id="303"><a href="#303">303</a></td></tr
><tr id="gr_svn78_304"

><td id="304"><a href="#304">304</a></td></tr
><tr id="gr_svn78_305"

><td id="305"><a href="#305">305</a></td></tr
><tr id="gr_svn78_306"

><td id="306"><a href="#306">306</a></td></tr
><tr id="gr_svn78_307"

><td id="307"><a href="#307">307</a></td></tr
><tr id="gr_svn78_308"

><td id="308"><a href="#308">308</a></td></tr
><tr id="gr_svn78_309"

><td id="309"><a href="#309">309</a></td></tr
><tr id="gr_svn78_310"

><td id="310"><a href="#310">310</a></td></tr
><tr id="gr_svn78_311"

><td id="311"><a href="#311">311</a></td></tr
><tr id="gr_svn78_312"

><td id="312"><a href="#312">312</a></td></tr
><tr id="gr_svn78_313"

><td id="313"><a href="#313">313</a></td></tr
><tr id="gr_svn78_314"

><td id="314"><a href="#314">314</a></td></tr
><tr id="gr_svn78_315"

><td id="315"><a href="#315">315</a></td></tr
><tr id="gr_svn78_316"

><td id="316"><a href="#316">316</a></td></tr
><tr id="gr_svn78_317"

><td id="317"><a href="#317">317</a></td></tr
><tr id="gr_svn78_318"

><td id="318"><a href="#318">318</a></td></tr
><tr id="gr_svn78_319"

><td id="319"><a href="#319">319</a></td></tr
><tr id="gr_svn78_320"

><td id="320"><a href="#320">320</a></td></tr
><tr id="gr_svn78_321"

><td id="321"><a href="#321">321</a></td></tr
><tr id="gr_svn78_322"

><td id="322"><a href="#322">322</a></td></tr
><tr id="gr_svn78_323"

><td id="323"><a href="#323">323</a></td></tr
><tr id="gr_svn78_324"

><td id="324"><a href="#324">324</a></td></tr
><tr id="gr_svn78_325"

><td id="325"><a href="#325">325</a></td></tr
><tr id="gr_svn78_326"

><td id="326"><a href="#326">326</a></td></tr
><tr id="gr_svn78_327"

><td id="327"><a href="#327">327</a></td></tr
><tr id="gr_svn78_328"

><td id="328"><a href="#328">328</a></td></tr
><tr id="gr_svn78_329"

><td id="329"><a href="#329">329</a></td></tr
><tr id="gr_svn78_330"

><td id="330"><a href="#330">330</a></td></tr
><tr id="gr_svn78_331"

><td id="331"><a href="#331">331</a></td></tr
><tr id="gr_svn78_332"

><td id="332"><a href="#332">332</a></td></tr
><tr id="gr_svn78_333"

><td id="333"><a href="#333">333</a></td></tr
><tr id="gr_svn78_334"

><td id="334"><a href="#334">334</a></td></tr
><tr id="gr_svn78_335"

><td id="335"><a href="#335">335</a></td></tr
><tr id="gr_svn78_336"

><td id="336"><a href="#336">336</a></td></tr
><tr id="gr_svn78_337"

><td id="337"><a href="#337">337</a></td></tr
><tr id="gr_svn78_338"

><td id="338"><a href="#338">338</a></td></tr
><tr id="gr_svn78_339"

><td id="339"><a href="#339">339</a></td></tr
><tr id="gr_svn78_340"

><td id="340"><a href="#340">340</a></td></tr
><tr id="gr_svn78_341"

><td id="341"><a href="#341">341</a></td></tr
><tr id="gr_svn78_342"

><td id="342"><a href="#342">342</a></td></tr
><tr id="gr_svn78_343"

><td id="343"><a href="#343">343</a></td></tr
><tr id="gr_svn78_344"

><td id="344"><a href="#344">344</a></td></tr
><tr id="gr_svn78_345"

><td id="345"><a href="#345">345</a></td></tr
><tr id="gr_svn78_346"

><td id="346"><a href="#346">346</a></td></tr
><tr id="gr_svn78_347"

><td id="347"><a href="#347">347</a></td></tr
><tr id="gr_svn78_348"

><td id="348"><a href="#348">348</a></td></tr
><tr id="gr_svn78_349"

><td id="349"><a href="#349">349</a></td></tr
><tr id="gr_svn78_350"

><td id="350"><a href="#350">350</a></td></tr
><tr id="gr_svn78_351"

><td id="351"><a href="#351">351</a></td></tr
><tr id="gr_svn78_352"

><td id="352"><a href="#352">352</a></td></tr
><tr id="gr_svn78_353"

><td id="353"><a href="#353">353</a></td></tr
><tr id="gr_svn78_354"

><td id="354"><a href="#354">354</a></td></tr
><tr id="gr_svn78_355"

><td id="355"><a href="#355">355</a></td></tr
><tr id="gr_svn78_356"

><td id="356"><a href="#356">356</a></td></tr
><tr id="gr_svn78_357"

><td id="357"><a href="#357">357</a></td></tr
><tr id="gr_svn78_358"

><td id="358"><a href="#358">358</a></td></tr
><tr id="gr_svn78_359"

><td id="359"><a href="#359">359</a></td></tr
><tr id="gr_svn78_360"

><td id="360"><a href="#360">360</a></td></tr
><tr id="gr_svn78_361"

><td id="361"><a href="#361">361</a></td></tr
><tr id="gr_svn78_362"

><td id="362"><a href="#362">362</a></td></tr
><tr id="gr_svn78_363"

><td id="363"><a href="#363">363</a></td></tr
><tr id="gr_svn78_364"

><td id="364"><a href="#364">364</a></td></tr
><tr id="gr_svn78_365"

><td id="365"><a href="#365">365</a></td></tr
><tr id="gr_svn78_366"

><td id="366"><a href="#366">366</a></td></tr
><tr id="gr_svn78_367"

><td id="367"><a href="#367">367</a></td></tr
><tr id="gr_svn78_368"

><td id="368"><a href="#368">368</a></td></tr
><tr id="gr_svn78_369"

><td id="369"><a href="#369">369</a></td></tr
><tr id="gr_svn78_370"

><td id="370"><a href="#370">370</a></td></tr
><tr id="gr_svn78_371"

><td id="371"><a href="#371">371</a></td></tr
><tr id="gr_svn78_372"

><td id="372"><a href="#372">372</a></td></tr
><tr id="gr_svn78_373"

><td id="373"><a href="#373">373</a></td></tr
><tr id="gr_svn78_374"

><td id="374"><a href="#374">374</a></td></tr
><tr id="gr_svn78_375"

><td id="375"><a href="#375">375</a></td></tr
><tr id="gr_svn78_376"

><td id="376"><a href="#376">376</a></td></tr
><tr id="gr_svn78_377"

><td id="377"><a href="#377">377</a></td></tr
><tr id="gr_svn78_378"

><td id="378"><a href="#378">378</a></td></tr
><tr id="gr_svn78_379"

><td id="379"><a href="#379">379</a></td></tr
><tr id="gr_svn78_380"

><td id="380"><a href="#380">380</a></td></tr
><tr id="gr_svn78_381"

><td id="381"><a href="#381">381</a></td></tr
><tr id="gr_svn78_382"

><td id="382"><a href="#382">382</a></td></tr
><tr id="gr_svn78_383"

><td id="383"><a href="#383">383</a></td></tr
><tr id="gr_svn78_384"

><td id="384"><a href="#384">384</a></td></tr
><tr id="gr_svn78_385"

><td id="385"><a href="#385">385</a></td></tr
><tr id="gr_svn78_386"

><td id="386"><a href="#386">386</a></td></tr
><tr id="gr_svn78_387"

><td id="387"><a href="#387">387</a></td></tr
><tr id="gr_svn78_388"

><td id="388"><a href="#388">388</a></td></tr
><tr id="gr_svn78_389"

><td id="389"><a href="#389">389</a></td></tr
><tr id="gr_svn78_390"

><td id="390"><a href="#390">390</a></td></tr
><tr id="gr_svn78_391"

><td id="391"><a href="#391">391</a></td></tr
><tr id="gr_svn78_392"

><td id="392"><a href="#392">392</a></td></tr
><tr id="gr_svn78_393"

><td id="393"><a href="#393">393</a></td></tr
><tr id="gr_svn78_394"

><td id="394"><a href="#394">394</a></td></tr
><tr id="gr_svn78_395"

><td id="395"><a href="#395">395</a></td></tr
><tr id="gr_svn78_396"

><td id="396"><a href="#396">396</a></td></tr
><tr id="gr_svn78_397"

><td id="397"><a href="#397">397</a></td></tr
><tr id="gr_svn78_398"

><td id="398"><a href="#398">398</a></td></tr
><tr id="gr_svn78_399"

><td id="399"><a href="#399">399</a></td></tr
><tr id="gr_svn78_400"

><td id="400"><a href="#400">400</a></td></tr
><tr id="gr_svn78_401"

><td id="401"><a href="#401">401</a></td></tr
><tr id="gr_svn78_402"

><td id="402"><a href="#402">402</a></td></tr
><tr id="gr_svn78_403"

><td id="403"><a href="#403">403</a></td></tr
><tr id="gr_svn78_404"

><td id="404"><a href="#404">404</a></td></tr
><tr id="gr_svn78_405"

><td id="405"><a href="#405">405</a></td></tr
><tr id="gr_svn78_406"

><td id="406"><a href="#406">406</a></td></tr
><tr id="gr_svn78_407"

><td id="407"><a href="#407">407</a></td></tr
><tr id="gr_svn78_408"

><td id="408"><a href="#408">408</a></td></tr
><tr id="gr_svn78_409"

><td id="409"><a href="#409">409</a></td></tr
><tr id="gr_svn78_410"

><td id="410"><a href="#410">410</a></td></tr
><tr id="gr_svn78_411"

><td id="411"><a href="#411">411</a></td></tr
><tr id="gr_svn78_412"

><td id="412"><a href="#412">412</a></td></tr
><tr id="gr_svn78_413"

><td id="413"><a href="#413">413</a></td></tr
><tr id="gr_svn78_414"

><td id="414"><a href="#414">414</a></td></tr
><tr id="gr_svn78_415"

><td id="415"><a href="#415">415</a></td></tr
><tr id="gr_svn78_416"

><td id="416"><a href="#416">416</a></td></tr
><tr id="gr_svn78_417"

><td id="417"><a href="#417">417</a></td></tr
><tr id="gr_svn78_418"

><td id="418"><a href="#418">418</a></td></tr
><tr id="gr_svn78_419"

><td id="419"><a href="#419">419</a></td></tr
><tr id="gr_svn78_420"

><td id="420"><a href="#420">420</a></td></tr
><tr id="gr_svn78_421"

><td id="421"><a href="#421">421</a></td></tr
><tr id="gr_svn78_422"

><td id="422"><a href="#422">422</a></td></tr
><tr id="gr_svn78_423"

><td id="423"><a href="#423">423</a></td></tr
><tr id="gr_svn78_424"

><td id="424"><a href="#424">424</a></td></tr
><tr id="gr_svn78_425"

><td id="425"><a href="#425">425</a></td></tr
><tr id="gr_svn78_426"

><td id="426"><a href="#426">426</a></td></tr
><tr id="gr_svn78_427"

><td id="427"><a href="#427">427</a></td></tr
><tr id="gr_svn78_428"

><td id="428"><a href="#428">428</a></td></tr
><tr id="gr_svn78_429"

><td id="429"><a href="#429">429</a></td></tr
><tr id="gr_svn78_430"

><td id="430"><a href="#430">430</a></td></tr
><tr id="gr_svn78_431"

><td id="431"><a href="#431">431</a></td></tr
><tr id="gr_svn78_432"

><td id="432"><a href="#432">432</a></td></tr
><tr id="gr_svn78_433"

><td id="433"><a href="#433">433</a></td></tr
><tr id="gr_svn78_434"

><td id="434"><a href="#434">434</a></td></tr
><tr id="gr_svn78_435"

><td id="435"><a href="#435">435</a></td></tr
><tr id="gr_svn78_436"

><td id="436"><a href="#436">436</a></td></tr
><tr id="gr_svn78_437"

><td id="437"><a href="#437">437</a></td></tr
><tr id="gr_svn78_438"

><td id="438"><a href="#438">438</a></td></tr
><tr id="gr_svn78_439"

><td id="439"><a href="#439">439</a></td></tr
><tr id="gr_svn78_440"

><td id="440"><a href="#440">440</a></td></tr
><tr id="gr_svn78_441"

><td id="441"><a href="#441">441</a></td></tr
><tr id="gr_svn78_442"

><td id="442"><a href="#442">442</a></td></tr
><tr id="gr_svn78_443"

><td id="443"><a href="#443">443</a></td></tr
><tr id="gr_svn78_444"

><td id="444"><a href="#444">444</a></td></tr
><tr id="gr_svn78_445"

><td id="445"><a href="#445">445</a></td></tr
><tr id="gr_svn78_446"

><td id="446"><a href="#446">446</a></td></tr
><tr id="gr_svn78_447"

><td id="447"><a href="#447">447</a></td></tr
><tr id="gr_svn78_448"

><td id="448"><a href="#448">448</a></td></tr
><tr id="gr_svn78_449"

><td id="449"><a href="#449">449</a></td></tr
><tr id="gr_svn78_450"

><td id="450"><a href="#450">450</a></td></tr
><tr id="gr_svn78_451"

><td id="451"><a href="#451">451</a></td></tr
><tr id="gr_svn78_452"

><td id="452"><a href="#452">452</a></td></tr
><tr id="gr_svn78_453"

><td id="453"><a href="#453">453</a></td></tr
><tr id="gr_svn78_454"

><td id="454"><a href="#454">454</a></td></tr
><tr id="gr_svn78_455"

><td id="455"><a href="#455">455</a></td></tr
><tr id="gr_svn78_456"

><td id="456"><a href="#456">456</a></td></tr
><tr id="gr_svn78_457"

><td id="457"><a href="#457">457</a></td></tr
><tr id="gr_svn78_458"

><td id="458"><a href="#458">458</a></td></tr
><tr id="gr_svn78_459"

><td id="459"><a href="#459">459</a></td></tr
><tr id="gr_svn78_460"

><td id="460"><a href="#460">460</a></td></tr
><tr id="gr_svn78_461"

><td id="461"><a href="#461">461</a></td></tr
><tr id="gr_svn78_462"

><td id="462"><a href="#462">462</a></td></tr
><tr id="gr_svn78_463"

><td id="463"><a href="#463">463</a></td></tr
><tr id="gr_svn78_464"

><td id="464"><a href="#464">464</a></td></tr
><tr id="gr_svn78_465"

><td id="465"><a href="#465">465</a></td></tr
><tr id="gr_svn78_466"

><td id="466"><a href="#466">466</a></td></tr
><tr id="gr_svn78_467"

><td id="467"><a href="#467">467</a></td></tr
><tr id="gr_svn78_468"

><td id="468"><a href="#468">468</a></td></tr
><tr id="gr_svn78_469"

><td id="469"><a href="#469">469</a></td></tr
><tr id="gr_svn78_470"

><td id="470"><a href="#470">470</a></td></tr
><tr id="gr_svn78_471"

><td id="471"><a href="#471">471</a></td></tr
><tr id="gr_svn78_472"

><td id="472"><a href="#472">472</a></td></tr
><tr id="gr_svn78_473"

><td id="473"><a href="#473">473</a></td></tr
><tr id="gr_svn78_474"

><td id="474"><a href="#474">474</a></td></tr
><tr id="gr_svn78_475"

><td id="475"><a href="#475">475</a></td></tr
><tr id="gr_svn78_476"

><td id="476"><a href="#476">476</a></td></tr
><tr id="gr_svn78_477"

><td id="477"><a href="#477">477</a></td></tr
><tr id="gr_svn78_478"

><td id="478"><a href="#478">478</a></td></tr
><tr id="gr_svn78_479"

><td id="479"><a href="#479">479</a></td></tr
><tr id="gr_svn78_480"

><td id="480"><a href="#480">480</a></td></tr
><tr id="gr_svn78_481"

><td id="481"><a href="#481">481</a></td></tr
><tr id="gr_svn78_482"

><td id="482"><a href="#482">482</a></td></tr
><tr id="gr_svn78_483"

><td id="483"><a href="#483">483</a></td></tr
><tr id="gr_svn78_484"

><td id="484"><a href="#484">484</a></td></tr
><tr id="gr_svn78_485"

><td id="485"><a href="#485">485</a></td></tr
><tr id="gr_svn78_486"

><td id="486"><a href="#486">486</a></td></tr
><tr id="gr_svn78_487"

><td id="487"><a href="#487">487</a></td></tr
><tr id="gr_svn78_488"

><td id="488"><a href="#488">488</a></td></tr
><tr id="gr_svn78_489"

><td id="489"><a href="#489">489</a></td></tr
><tr id="gr_svn78_490"

><td id="490"><a href="#490">490</a></td></tr
><tr id="gr_svn78_491"

><td id="491"><a href="#491">491</a></td></tr
><tr id="gr_svn78_492"

><td id="492"><a href="#492">492</a></td></tr
><tr id="gr_svn78_493"

><td id="493"><a href="#493">493</a></td></tr
><tr id="gr_svn78_494"

><td id="494"><a href="#494">494</a></td></tr
><tr id="gr_svn78_495"

><td id="495"><a href="#495">495</a></td></tr
><tr id="gr_svn78_496"

><td id="496"><a href="#496">496</a></td></tr
><tr id="gr_svn78_497"

><td id="497"><a href="#497">497</a></td></tr
><tr id="gr_svn78_498"

><td id="498"><a href="#498">498</a></td></tr
><tr id="gr_svn78_499"

><td id="499"><a href="#499">499</a></td></tr
><tr id="gr_svn78_500"

><td id="500"><a href="#500">500</a></td></tr
><tr id="gr_svn78_501"

><td id="501"><a href="#501">501</a></td></tr
><tr id="gr_svn78_502"

><td id="502"><a href="#502">502</a></td></tr
><tr id="gr_svn78_503"

><td id="503"><a href="#503">503</a></td></tr
><tr id="gr_svn78_504"

><td id="504"><a href="#504">504</a></td></tr
><tr id="gr_svn78_505"

><td id="505"><a href="#505">505</a></td></tr
><tr id="gr_svn78_506"

><td id="506"><a href="#506">506</a></td></tr
><tr id="gr_svn78_507"

><td id="507"><a href="#507">507</a></td></tr
><tr id="gr_svn78_508"

><td id="508"><a href="#508">508</a></td></tr
><tr id="gr_svn78_509"

><td id="509"><a href="#509">509</a></td></tr
><tr id="gr_svn78_510"

><td id="510"><a href="#510">510</a></td></tr
><tr id="gr_svn78_511"

><td id="511"><a href="#511">511</a></td></tr
><tr id="gr_svn78_512"

><td id="512"><a href="#512">512</a></td></tr
><tr id="gr_svn78_513"

><td id="513"><a href="#513">513</a></td></tr
><tr id="gr_svn78_514"

><td id="514"><a href="#514">514</a></td></tr
><tr id="gr_svn78_515"

><td id="515"><a href="#515">515</a></td></tr
><tr id="gr_svn78_516"

><td id="516"><a href="#516">516</a></td></tr
><tr id="gr_svn78_517"

><td id="517"><a href="#517">517</a></td></tr
><tr id="gr_svn78_518"

><td id="518"><a href="#518">518</a></td></tr
><tr id="gr_svn78_519"

><td id="519"><a href="#519">519</a></td></tr
><tr id="gr_svn78_520"

><td id="520"><a href="#520">520</a></td></tr
><tr id="gr_svn78_521"

><td id="521"><a href="#521">521</a></td></tr
><tr id="gr_svn78_522"

><td id="522"><a href="#522">522</a></td></tr
><tr id="gr_svn78_523"

><td id="523"><a href="#523">523</a></td></tr
><tr id="gr_svn78_524"

><td id="524"><a href="#524">524</a></td></tr
><tr id="gr_svn78_525"

><td id="525"><a href="#525">525</a></td></tr
><tr id="gr_svn78_526"

><td id="526"><a href="#526">526</a></td></tr
><tr id="gr_svn78_527"

><td id="527"><a href="#527">527</a></td></tr
><tr id="gr_svn78_528"

><td id="528"><a href="#528">528</a></td></tr
><tr id="gr_svn78_529"

><td id="529"><a href="#529">529</a></td></tr
><tr id="gr_svn78_530"

><td id="530"><a href="#530">530</a></td></tr
><tr id="gr_svn78_531"

><td id="531"><a href="#531">531</a></td></tr
><tr id="gr_svn78_532"

><td id="532"><a href="#532">532</a></td></tr
><tr id="gr_svn78_533"

><td id="533"><a href="#533">533</a></td></tr
><tr id="gr_svn78_534"

><td id="534"><a href="#534">534</a></td></tr
><tr id="gr_svn78_535"

><td id="535"><a href="#535">535</a></td></tr
><tr id="gr_svn78_536"

><td id="536"><a href="#536">536</a></td></tr
><tr id="gr_svn78_537"

><td id="537"><a href="#537">537</a></td></tr
><tr id="gr_svn78_538"

><td id="538"><a href="#538">538</a></td></tr
><tr id="gr_svn78_539"

><td id="539"><a href="#539">539</a></td></tr
><tr id="gr_svn78_540"

><td id="540"><a href="#540">540</a></td></tr
><tr id="gr_svn78_541"

><td id="541"><a href="#541">541</a></td></tr
><tr id="gr_svn78_542"

><td id="542"><a href="#542">542</a></td></tr
><tr id="gr_svn78_543"

><td id="543"><a href="#543">543</a></td></tr
><tr id="gr_svn78_544"

><td id="544"><a href="#544">544</a></td></tr
><tr id="gr_svn78_545"

><td id="545"><a href="#545">545</a></td></tr
><tr id="gr_svn78_546"

><td id="546"><a href="#546">546</a></td></tr
><tr id="gr_svn78_547"

><td id="547"><a href="#547">547</a></td></tr
><tr id="gr_svn78_548"

><td id="548"><a href="#548">548</a></td></tr
><tr id="gr_svn78_549"

><td id="549"><a href="#549">549</a></td></tr
><tr id="gr_svn78_550"

><td id="550"><a href="#550">550</a></td></tr
><tr id="gr_svn78_551"

><td id="551"><a href="#551">551</a></td></tr
><tr id="gr_svn78_552"

><td id="552"><a href="#552">552</a></td></tr
><tr id="gr_svn78_553"

><td id="553"><a href="#553">553</a></td></tr
><tr id="gr_svn78_554"

><td id="554"><a href="#554">554</a></td></tr
><tr id="gr_svn78_555"

><td id="555"><a href="#555">555</a></td></tr
><tr id="gr_svn78_556"

><td id="556"><a href="#556">556</a></td></tr
><tr id="gr_svn78_557"

><td id="557"><a href="#557">557</a></td></tr
><tr id="gr_svn78_558"

><td id="558"><a href="#558">558</a></td></tr
><tr id="gr_svn78_559"

><td id="559"><a href="#559">559</a></td></tr
><tr id="gr_svn78_560"

><td id="560"><a href="#560">560</a></td></tr
><tr id="gr_svn78_561"

><td id="561"><a href="#561">561</a></td></tr
><tr id="gr_svn78_562"

><td id="562"><a href="#562">562</a></td></tr
><tr id="gr_svn78_563"

><td id="563"><a href="#563">563</a></td></tr
><tr id="gr_svn78_564"

><td id="564"><a href="#564">564</a></td></tr
><tr id="gr_svn78_565"

><td id="565"><a href="#565">565</a></td></tr
><tr id="gr_svn78_566"

><td id="566"><a href="#566">566</a></td></tr
><tr id="gr_svn78_567"

><td id="567"><a href="#567">567</a></td></tr
><tr id="gr_svn78_568"

><td id="568"><a href="#568">568</a></td></tr
><tr id="gr_svn78_569"

><td id="569"><a href="#569">569</a></td></tr
><tr id="gr_svn78_570"

><td id="570"><a href="#570">570</a></td></tr
><tr id="gr_svn78_571"

><td id="571"><a href="#571">571</a></td></tr
><tr id="gr_svn78_572"

><td id="572"><a href="#572">572</a></td></tr
><tr id="gr_svn78_573"

><td id="573"><a href="#573">573</a></td></tr
><tr id="gr_svn78_574"

><td id="574"><a href="#574">574</a></td></tr
><tr id="gr_svn78_575"

><td id="575"><a href="#575">575</a></td></tr
><tr id="gr_svn78_576"

><td id="576"><a href="#576">576</a></td></tr
><tr id="gr_svn78_577"

><td id="577"><a href="#577">577</a></td></tr
><tr id="gr_svn78_578"

><td id="578"><a href="#578">578</a></td></tr
><tr id="gr_svn78_579"

><td id="579"><a href="#579">579</a></td></tr
><tr id="gr_svn78_580"

><td id="580"><a href="#580">580</a></td></tr
><tr id="gr_svn78_581"

><td id="581"><a href="#581">581</a></td></tr
><tr id="gr_svn78_582"

><td id="582"><a href="#582">582</a></td></tr
><tr id="gr_svn78_583"

><td id="583"><a href="#583">583</a></td></tr
><tr id="gr_svn78_584"

><td id="584"><a href="#584">584</a></td></tr
><tr id="gr_svn78_585"

><td id="585"><a href="#585">585</a></td></tr
><tr id="gr_svn78_586"

><td id="586"><a href="#586">586</a></td></tr
><tr id="gr_svn78_587"

><td id="587"><a href="#587">587</a></td></tr
><tr id="gr_svn78_588"

><td id="588"><a href="#588">588</a></td></tr
><tr id="gr_svn78_589"

><td id="589"><a href="#589">589</a></td></tr
><tr id="gr_svn78_590"

><td id="590"><a href="#590">590</a></td></tr
><tr id="gr_svn78_591"

><td id="591"><a href="#591">591</a></td></tr
><tr id="gr_svn78_592"

><td id="592"><a href="#592">592</a></td></tr
><tr id="gr_svn78_593"

><td id="593"><a href="#593">593</a></td></tr
><tr id="gr_svn78_594"

><td id="594"><a href="#594">594</a></td></tr
><tr id="gr_svn78_595"

><td id="595"><a href="#595">595</a></td></tr
><tr id="gr_svn78_596"

><td id="596"><a href="#596">596</a></td></tr
><tr id="gr_svn78_597"

><td id="597"><a href="#597">597</a></td></tr
><tr id="gr_svn78_598"

><td id="598"><a href="#598">598</a></td></tr
><tr id="gr_svn78_599"

><td id="599"><a href="#599">599</a></td></tr
><tr id="gr_svn78_600"

><td id="600"><a href="#600">600</a></td></tr
><tr id="gr_svn78_601"

><td id="601"><a href="#601">601</a></td></tr
><tr id="gr_svn78_602"

><td id="602"><a href="#602">602</a></td></tr
><tr id="gr_svn78_603"

><td id="603"><a href="#603">603</a></td></tr
><tr id="gr_svn78_604"

><td id="604"><a href="#604">604</a></td></tr
><tr id="gr_svn78_605"

><td id="605"><a href="#605">605</a></td></tr
><tr id="gr_svn78_606"

><td id="606"><a href="#606">606</a></td></tr
><tr id="gr_svn78_607"

><td id="607"><a href="#607">607</a></td></tr
><tr id="gr_svn78_608"

><td id="608"><a href="#608">608</a></td></tr
><tr id="gr_svn78_609"

><td id="609"><a href="#609">609</a></td></tr
><tr id="gr_svn78_610"

><td id="610"><a href="#610">610</a></td></tr
><tr id="gr_svn78_611"

><td id="611"><a href="#611">611</a></td></tr
><tr id="gr_svn78_612"

><td id="612"><a href="#612">612</a></td></tr
><tr id="gr_svn78_613"

><td id="613"><a href="#613">613</a></td></tr
><tr id="gr_svn78_614"

><td id="614"><a href="#614">614</a></td></tr
><tr id="gr_svn78_615"

><td id="615"><a href="#615">615</a></td></tr
><tr id="gr_svn78_616"

><td id="616"><a href="#616">616</a></td></tr
><tr id="gr_svn78_617"

><td id="617"><a href="#617">617</a></td></tr
><tr id="gr_svn78_618"

><td id="618"><a href="#618">618</a></td></tr
><tr id="gr_svn78_619"

><td id="619"><a href="#619">619</a></td></tr
><tr id="gr_svn78_620"

><td id="620"><a href="#620">620</a></td></tr
><tr id="gr_svn78_621"

><td id="621"><a href="#621">621</a></td></tr
><tr id="gr_svn78_622"

><td id="622"><a href="#622">622</a></td></tr
><tr id="gr_svn78_623"

><td id="623"><a href="#623">623</a></td></tr
><tr id="gr_svn78_624"

><td id="624"><a href="#624">624</a></td></tr
><tr id="gr_svn78_625"

><td id="625"><a href="#625">625</a></td></tr
><tr id="gr_svn78_626"

><td id="626"><a href="#626">626</a></td></tr
><tr id="gr_svn78_627"

><td id="627"><a href="#627">627</a></td></tr
><tr id="gr_svn78_628"

><td id="628"><a href="#628">628</a></td></tr
><tr id="gr_svn78_629"

><td id="629"><a href="#629">629</a></td></tr
><tr id="gr_svn78_630"

><td id="630"><a href="#630">630</a></td></tr
></table></pre>
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
<pre class="prettyprint lang-js"><table id="src_table_0"><tr
id=sl_svn78_1

><td class="source">/*<br></td></tr
><tr
id=sl_svn78_2

><td class="source">	Snow Stack 3D CSS Photo Viewer<br></td></tr
><tr
id=sl_svn78_3

><td class="source"><br></td></tr
><tr
id=sl_svn78_4

><td class="source">	Copyright (C) 2009 Charles Ying. All Rights Reserved.<br></td></tr
><tr
id=sl_svn78_5

><td class="source">	This source code is available under Apache License 2.0.<br></td></tr
><tr
id=sl_svn78_6

><td class="source">	<br></td></tr
><tr
id=sl_svn78_7

><td class="source">	Performance Notes (courtesy of Apple):<br></td></tr
><tr
id=sl_svn78_8

><td class="source">		on leopard, animating transforms with a transform list &gt; 1 function, animation falls back to software<br></td></tr
><tr
id=sl_svn78_9

><td class="source">		shadows (and animated shadows) plus border animations can cause additional redraws<br></td></tr
><tr
id=sl_svn78_10

><td class="source">		offsetWidth / offsetHeight should be avoided.<br></td></tr
><tr
id=sl_svn78_11

><td class="source">*/<br></td></tr
><tr
id=sl_svn78_12

><td class="source"><br></td></tr
><tr
id=sl_svn78_13

><td class="source">// (function () {  // Module pattern<br></td></tr
><tr
id=sl_svn78_14

><td class="source"><br></td></tr
><tr
id=sl_svn78_15

><td class="source">var global = this;<br></td></tr
><tr
id=sl_svn78_16

><td class="source"><br></td></tr
><tr
id=sl_svn78_17

><td class="source">var CWIDTH;<br></td></tr
><tr
id=sl_svn78_18

><td class="source">var CHEIGHT;<br></td></tr
><tr
id=sl_svn78_19

><td class="source">var CGAP = 10;<br></td></tr
><tr
id=sl_svn78_20

><td class="source">var CXSPACING;<br></td></tr
><tr
id=sl_svn78_21

><td class="source">var CYSPACING;<br></td></tr
><tr
id=sl_svn78_22

><td class="source"><br></td></tr
><tr
id=sl_svn78_23

><td class="source">var snowstack_options = {<br></td></tr
><tr
id=sl_svn78_24

><td class="source">	rows: 3,<br></td></tr
><tr
id=sl_svn78_25

><td class="source">	refreshzoom: true,<br></td></tr
><tr
id=sl_svn78_26

><td class="source">	captions: false<br></td></tr
><tr
id=sl_svn78_27

><td class="source">};<br></td></tr
><tr
id=sl_svn78_28

><td class="source"><br></td></tr
><tr
id=sl_svn78_29

><td class="source">var vfx = {<br></td></tr
><tr
id=sl_svn78_30

><td class="source">	elem: function (name, attrs, child)<br></td></tr
><tr
id=sl_svn78_31

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_32

><td class="source">		var e = document.createElement(name);<br></td></tr
><tr
id=sl_svn78_33

><td class="source">		if (attrs)<br></td></tr
><tr
id=sl_svn78_34

><td class="source">		{<br></td></tr
><tr
id=sl_svn78_35

><td class="source">			for (var key in attrs)<br></td></tr
><tr
id=sl_svn78_36

><td class="source">			{<br></td></tr
><tr
id=sl_svn78_37

><td class="source">				if (attrs.hasOwnProperty(key))<br></td></tr
><tr
id=sl_svn78_38

><td class="source">				{<br></td></tr
><tr
id=sl_svn78_39

><td class="source">					e.setAttribute(key, attrs[key]);<br></td></tr
><tr
id=sl_svn78_40

><td class="source">				}<br></td></tr
><tr
id=sl_svn78_41

><td class="source">			}<br></td></tr
><tr
id=sl_svn78_42

><td class="source">		}<br></td></tr
><tr
id=sl_svn78_43

><td class="source">		<br></td></tr
><tr
id=sl_svn78_44

><td class="source">		if (child)<br></td></tr
><tr
id=sl_svn78_45

><td class="source">		{<br></td></tr
><tr
id=sl_svn78_46

><td class="source">			e.appendChild(child);<br></td></tr
><tr
id=sl_svn78_47

><td class="source">		}<br></td></tr
><tr
id=sl_svn78_48

><td class="source">		return e;<br></td></tr
><tr
id=sl_svn78_49

><td class="source">	},<br></td></tr
><tr
id=sl_svn78_50

><td class="source">	byid: function (id)<br></td></tr
><tr
id=sl_svn78_51

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_52

><td class="source">		return document.getElementById(id);<br></td></tr
><tr
id=sl_svn78_53

><td class="source">	},<br></td></tr
><tr
id=sl_svn78_54

><td class="source">	loadhandler: function (elem, callback)<br></td></tr
><tr
id=sl_svn78_55

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_56

><td class="source">		elem.addEventListener(&quot;load&quot;, callback, false);<br></td></tr
><tr
id=sl_svn78_57

><td class="source">	},<br></td></tr
><tr
id=sl_svn78_58

><td class="source">	translate3d: function (x, y, z)<br></td></tr
><tr
id=sl_svn78_59

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_60

><td class="source">		return &quot;translate3d(&quot; + x + &quot;px, &quot; + y + &quot;px, &quot; + z + &quot;px)&quot;;<br></td></tr
><tr
id=sl_svn78_61

><td class="source">	}<br></td></tr
><tr
id=sl_svn78_62

><td class="source">};<br></td></tr
><tr
id=sl_svn78_63

><td class="source"><br></td></tr
><tr
id=sl_svn78_64

><td class="source">var currentCellIndex = -1;<br></td></tr
><tr
id=sl_svn78_65

><td class="source">var cells = [];<br></td></tr
><tr
id=sl_svn78_66

><td class="source"><br></td></tr
><tr
id=sl_svn78_67

><td class="source">var dolly;<br></td></tr
><tr
id=sl_svn78_68

><td class="source">var camera;<br></td></tr
><tr
id=sl_svn78_69

><td class="source">var caption;<br></td></tr
><tr
id=sl_svn78_70

><td class="source"><br></td></tr
><tr
id=sl_svn78_71

><td class="source">var cellstack;<br></td></tr
><tr
id=sl_svn78_72

><td class="source">var reflectionstack;<br></td></tr
><tr
id=sl_svn78_73

><td class="source"><br></td></tr
><tr
id=sl_svn78_74

><td class="source">var magnifyMode;<br></td></tr
><tr
id=sl_svn78_75

><td class="source">var newbieUser = true;<br></td></tr
><tr
id=sl_svn78_76

><td class="source"><br></td></tr
><tr
id=sl_svn78_77

><td class="source">var zoomTimer = null;<br></td></tr
><tr
id=sl_svn78_78

><td class="source">var currentTimer = null;<br></td></tr
><tr
id=sl_svn78_79

><td class="source"><br></td></tr
><tr
id=sl_svn78_80

><td class="source">function cameraTransformForCell(n)<br></td></tr
><tr
id=sl_svn78_81

><td class="source">{<br></td></tr
><tr
id=sl_svn78_82

><td class="source">	var x = Math.floor(n / snowstack_options.rows);<br></td></tr
><tr
id=sl_svn78_83

><td class="source">	var y = n - x * snowstack_options.rows;<br></td></tr
><tr
id=sl_svn78_84

><td class="source">	var cx = (x + 0.5) * CXSPACING;<br></td></tr
><tr
id=sl_svn78_85

><td class="source">	var cy = (y + 0.5) * CYSPACING;<br></td></tr
><tr
id=sl_svn78_86

><td class="source"><br></td></tr
><tr
id=sl_svn78_87

><td class="source">	if (magnifyMode)<br></td></tr
><tr
id=sl_svn78_88

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_89

><td class="source">		return vfx.translate3d(-cx, -cy, 180);<br></td></tr
><tr
id=sl_svn78_90

><td class="source">	}<br></td></tr
><tr
id=sl_svn78_91

><td class="source">	else<br></td></tr
><tr
id=sl_svn78_92

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_93

><td class="source">		return vfx.translate3d(-cx, -cy, 0);<br></td></tr
><tr
id=sl_svn78_94

><td class="source">	}	<br></td></tr
><tr
id=sl_svn78_95

><td class="source">}<br></td></tr
><tr
id=sl_svn78_96

><td class="source"><br></td></tr
><tr
id=sl_svn78_97

><td class="source">function layoutElement(elem, iwidth, iheight)<br></td></tr
><tr
id=sl_svn78_98

><td class="source">{<br></td></tr
><tr
id=sl_svn78_99

><td class="source">	var ratio = Math.min(CHEIGHT / iheight, CWIDTH / iwidth);<br></td></tr
><tr
id=sl_svn78_100

><td class="source">	<br></td></tr
><tr
id=sl_svn78_101

><td class="source">	iwidth *= ratio;<br></td></tr
><tr
id=sl_svn78_102

><td class="source">	iheight *= ratio;<br></td></tr
><tr
id=sl_svn78_103

><td class="source"><br></td></tr
><tr
id=sl_svn78_104

><td class="source">	elem.style.width = Math.round(iwidth) + &quot;px&quot;;<br></td></tr
><tr
id=sl_svn78_105

><td class="source">	elem.style.height = Math.round(iheight) + &quot;px&quot;;<br></td></tr
><tr
id=sl_svn78_106

><td class="source"><br></td></tr
><tr
id=sl_svn78_107

><td class="source">	elem.style.left = Math.round((CWIDTH - iwidth) / 2) + &quot;px&quot;;<br></td></tr
><tr
id=sl_svn78_108

><td class="source">	elem.style.top = Math.round((CHEIGHT - iheight) / 2) + &quot;px&quot;;<br></td></tr
><tr
id=sl_svn78_109

><td class="source">}<br></td></tr
><tr
id=sl_svn78_110

><td class="source"><br></td></tr
><tr
id=sl_svn78_111

><td class="source">//////////////////////<br></td></tr
><tr
id=sl_svn78_112

><td class="source"><br></td></tr
><tr
id=sl_svn78_113

><td class="source">var currentVideo = null;<br></td></tr
><tr
id=sl_svn78_114

><td class="source"><br></td></tr
><tr
id=sl_svn78_115

><td class="source">function play_video(newVideo)<br></td></tr
><tr
id=sl_svn78_116

><td class="source">{<br></td></tr
><tr
id=sl_svn78_117

><td class="source">	if (currentVideo &amp;&amp; !currentVideo.isPaused())<br></td></tr
><tr
id=sl_svn78_118

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_119

><td class="source">//		currentVideo.pause();<br></td></tr
><tr
id=sl_svn78_120

><td class="source">		currentVideo.setMuted(true);<br></td></tr
><tr
id=sl_svn78_121

><td class="source">	}<br></td></tr
><tr
id=sl_svn78_122

><td class="source">	<br></td></tr
><tr
id=sl_svn78_123

><td class="source">	currentVideo = newVideo;<br></td></tr
><tr
id=sl_svn78_124

><td class="source">	<br></td></tr
><tr
id=sl_svn78_125

><td class="source">	currentVideo.setMuted(false);<br></td></tr
><tr
id=sl_svn78_126

><td class="source">	currentVideo.play();<br></td></tr
><tr
id=sl_svn78_127

><td class="source">}<br></td></tr
><tr
id=sl_svn78_128

><td class="source"><br></td></tr
><tr
id=sl_svn78_129

><td class="source">//////////////////////<br></td></tr
><tr
id=sl_svn78_130

><td class="source"><br></td></tr
><tr
id=sl_svn78_131

><td class="source">function html5video(elem, cell)<br></td></tr
><tr
id=sl_svn78_132

><td class="source">{<br></td></tr
><tr
id=sl_svn78_133

><td class="source">	var video = vfx.elem(&quot;video&quot;, { &quot;class&quot;: &quot;media&quot; });<br></td></tr
><tr
id=sl_svn78_134

><td class="source"><br></td></tr
><tr
id=sl_svn78_135

><td class="source">	var videolayout = function (e)<br></td></tr
><tr
id=sl_svn78_136

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_137

><td class="source">		layoutElement(video, video.videoWidth, video.videoHeight);<br></td></tr
><tr
id=sl_svn78_138

><td class="source">		elem.parentNode.appendChild(video);<br></td></tr
><tr
id=sl_svn78_139

><td class="source">		elem.parentNode.removeChild(elem);<br></td></tr
><tr
id=sl_svn78_140

><td class="source">		return false;<br></td></tr
><tr
id=sl_svn78_141

><td class="source">	};<br></td></tr
><tr
id=sl_svn78_142

><td class="source"><br></td></tr
><tr
id=sl_svn78_143

><td class="source">	var playstarter = function (e)<br></td></tr
><tr
id=sl_svn78_144

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_145

><td class="source">		play_video(cell.video);	<br></td></tr
><tr
id=sl_svn78_146

><td class="source">		return false;<br></td></tr
><tr
id=sl_svn78_147

><td class="source">	};<br></td></tr
><tr
id=sl_svn78_148

><td class="source"><br></td></tr
><tr
id=sl_svn78_149

><td class="source">	video.addEventListener(&quot;loadedmetadata&quot;, videolayout, false);<br></td></tr
><tr
id=sl_svn78_150

><td class="source">	video.addEventListener(&quot;canplay&quot;, playstarter, false);<br></td></tr
><tr
id=sl_svn78_151

><td class="source">	video.src = cell.info.video;<br></td></tr
><tr
id=sl_svn78_152

><td class="source">	video.load();<br></td></tr
><tr
id=sl_svn78_153

><td class="source"><br></td></tr
><tr
id=sl_svn78_154

><td class="source">	cell.video = {<br></td></tr
><tr
id=sl_svn78_155

><td class="source">		play: function () { video.play(); },<br></td></tr
><tr
id=sl_svn78_156

><td class="source">		pause: function () { video.pause(); },<br></td></tr
><tr
id=sl_svn78_157

><td class="source">		isPaused: function () { return video.paused; },<br></td></tr
><tr
id=sl_svn78_158

><td class="source">		setMuted: function (muted) { video.muted = muted; },<br></td></tr
><tr
id=sl_svn78_159

><td class="source">		isMuted: function () { return video.muted; }<br></td></tr
><tr
id=sl_svn78_160

><td class="source">	};<br></td></tr
><tr
id=sl_svn78_161

><td class="source">}<br></td></tr
><tr
id=sl_svn78_162

><td class="source"><br></td></tr
><tr
id=sl_svn78_163

><td class="source">//////////////////////<br></td></tr
><tr
id=sl_svn78_164

><td class="source"><br></td></tr
><tr
id=sl_svn78_165

><td class="source">function refreshImage(elem, cell)<br></td></tr
><tr
id=sl_svn78_166

><td class="source">{<br></td></tr
><tr
id=sl_svn78_167

><td class="source">	if (zoomTimer)<br></td></tr
><tr
id=sl_svn78_168

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_169

><td class="source">		clearTimeout(zoomTimer);<br></td></tr
><tr
id=sl_svn78_170

><td class="source">	}<br></td></tr
><tr
id=sl_svn78_171

><td class="source">	<br></td></tr
><tr
id=sl_svn78_172

><td class="source">	if (cell.video)<br></td></tr
><tr
id=sl_svn78_173

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_174

><td class="source">		if (cell.video.isPaused() || cell.video.isMuted())<br></td></tr
><tr
id=sl_svn78_175

><td class="source">		{<br></td></tr
><tr
id=sl_svn78_176

><td class="source">			play_video(cell.video);<br></td></tr
><tr
id=sl_svn78_177

><td class="source">		}<br></td></tr
><tr
id=sl_svn78_178

><td class="source">		return;<br></td></tr
><tr
id=sl_svn78_179

><td class="source">	}<br></td></tr
><tr
id=sl_svn78_180

><td class="source"><br></td></tr
><tr
id=sl_svn78_181

><td class="source">	zoomTimer = setTimeout(function ()<br></td></tr
><tr
id=sl_svn78_182

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_183

><td class="source">		if (cell.info.zoom &amp;&amp; !cell.video)<br></td></tr
><tr
id=sl_svn78_184

><td class="source">		{<br></td></tr
><tr
id=sl_svn78_185

><td class="source">			elem.src = cell.info.zoom;<br></td></tr
><tr
id=sl_svn78_186

><td class="source">		}<br></td></tr
><tr
id=sl_svn78_187

><td class="source">		<br></td></tr
><tr
id=sl_svn78_188

><td class="source">		zoomTimer = null;<br></td></tr
><tr
id=sl_svn78_189

><td class="source">	}, 2000);<br></td></tr
><tr
id=sl_svn78_190

><td class="source">}<br></td></tr
><tr
id=sl_svn78_191

><td class="source"><br></td></tr
><tr
id=sl_svn78_192

><td class="source">function setcellclass(c, name)<br></td></tr
><tr
id=sl_svn78_193

><td class="source">{<br></td></tr
><tr
id=sl_svn78_194

><td class="source">	c.div.className = name;<br></td></tr
><tr
id=sl_svn78_195

><td class="source">	if (c.reflection)<br></td></tr
><tr
id=sl_svn78_196

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_197

><td class="source">		c.reflection.className = name;<br></td></tr
><tr
id=sl_svn78_198

><td class="source">	}<br></td></tr
><tr
id=sl_svn78_199

><td class="source">}<br></td></tr
><tr
id=sl_svn78_200

><td class="source"><br></td></tr
><tr
id=sl_svn78_201

><td class="source">function snowstack_togglemedia(index)<br></td></tr
><tr
id=sl_svn78_202

><td class="source">{<br></td></tr
><tr
id=sl_svn78_203

><td class="source">	var cell = cells[index];<br></td></tr
><tr
id=sl_svn78_204

><td class="source">	<br></td></tr
><tr
id=sl_svn78_205

><td class="source">	if (cell.video)<br></td></tr
><tr
id=sl_svn78_206

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_207

><td class="source">		if (cell.video.isPaused())<br></td></tr
><tr
id=sl_svn78_208

><td class="source">		{<br></td></tr
><tr
id=sl_svn78_209

><td class="source">			play_video(cell.video);<br></td></tr
><tr
id=sl_svn78_210

><td class="source">		}<br></td></tr
><tr
id=sl_svn78_211

><td class="source">		else<br></td></tr
><tr
id=sl_svn78_212

><td class="source">		{<br></td></tr
><tr
id=sl_svn78_213

><td class="source">			cell.video.pause();<br></td></tr
><tr
id=sl_svn78_214

><td class="source">		}<br></td></tr
><tr
id=sl_svn78_215

><td class="source">		return;<br></td></tr
><tr
id=sl_svn78_216

><td class="source">	}<br></td></tr
><tr
id=sl_svn78_217

><td class="source">	<br></td></tr
><tr
id=sl_svn78_218

><td class="source">	if (cell.info.videoloader)<br></td></tr
><tr
id=sl_svn78_219

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_220

><td class="source">		cell.info.videoloader(cell.divimage, cell);<br></td></tr
><tr
id=sl_svn78_221

><td class="source">	}<br></td></tr
><tr
id=sl_svn78_222

><td class="source">	else if (cell.info.video)<br></td></tr
><tr
id=sl_svn78_223

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_224

><td class="source">		html5video(cell.divimage, cell);<br></td></tr
><tr
id=sl_svn78_225

><td class="source">	}<br></td></tr
><tr
id=sl_svn78_226

><td class="source">}<br></td></tr
><tr
id=sl_svn78_227

><td class="source"><br></td></tr
><tr
id=sl_svn78_228

><td class="source">function snowstack_update(newIndex, newmagnifymode)<br></td></tr
><tr
id=sl_svn78_229

><td class="source">{<br></td></tr
><tr
id=sl_svn78_230

><td class="source">	if (currentCellIndex == newIndex &amp;&amp; magnifyMode == newmagnifymode)<br></td></tr
><tr
id=sl_svn78_231

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_232

><td class="source">		return;<br></td></tr
><tr
id=sl_svn78_233

><td class="source">	}<br></td></tr
><tr
id=sl_svn78_234

><td class="source">	<br></td></tr
><tr
id=sl_svn78_235

><td class="source">	if (currentCellIndex != -1)<br></td></tr
><tr
id=sl_svn78_236

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_237

><td class="source">		var oldCell = cells[currentCellIndex];<br></td></tr
><tr
id=sl_svn78_238

><td class="source">		setcellclass(oldCell, &quot;cell&quot;);<br></td></tr
><tr
id=sl_svn78_239

><td class="source">	}<br></td></tr
><tr
id=sl_svn78_240

><td class="source">	<br></td></tr
><tr
id=sl_svn78_241

><td class="source">	if (cells.length === 0)<br></td></tr
><tr
id=sl_svn78_242

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_243

><td class="source">		return;<br></td></tr
><tr
id=sl_svn78_244

><td class="source">	}<br></td></tr
><tr
id=sl_svn78_245

><td class="source"><br></td></tr
><tr
id=sl_svn78_246

><td class="source">	newIndex = Math.min(Math.max(newIndex, 0), cells.length - 1);<br></td></tr
><tr
id=sl_svn78_247

><td class="source">	currentCellIndex = newIndex;<br></td></tr
><tr
id=sl_svn78_248

><td class="source"><br></td></tr
><tr
id=sl_svn78_249

><td class="source">	var cell = cells[newIndex];<br></td></tr
><tr
id=sl_svn78_250

><td class="source">	magnifyMode = newmagnifymode;<br></td></tr
><tr
id=sl_svn78_251

><td class="source">	<br></td></tr
><tr
id=sl_svn78_252

><td class="source">	if (magnifyMode)<br></td></tr
><tr
id=sl_svn78_253

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_254

><td class="source">		// User figured out magnify mode, not a newbie.<br></td></tr
><tr
id=sl_svn78_255

><td class="source">		if (newbieUser)<br></td></tr
><tr
id=sl_svn78_256

><td class="source">		{<br></td></tr
><tr
id=sl_svn78_257

><td class="source">			newbieUser = false;<br></td></tr
><tr
id=sl_svn78_258

><td class="source">		}<br></td></tr
><tr
id=sl_svn78_259

><td class="source">	<br></td></tr
><tr
id=sl_svn78_260

><td class="source">		cell.div.className = &quot;cell magnify&quot;;<br></td></tr
><tr
id=sl_svn78_261

><td class="source">		<br></td></tr
><tr
id=sl_svn78_262

><td class="source">		if (snowstack_options.refreshzoom)<br></td></tr
><tr
id=sl_svn78_263

><td class="source">		{<br></td></tr
><tr
id=sl_svn78_264

><td class="source">			refreshImage(cell.divimage, cell);<br></td></tr
><tr
id=sl_svn78_265

><td class="source">		}<br></td></tr
><tr
id=sl_svn78_266

><td class="source">	}<br></td></tr
><tr
id=sl_svn78_267

><td class="source">	else<br></td></tr
><tr
id=sl_svn78_268

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_269

><td class="source">		setcellclass(cell, &quot;cell selected&quot;);<br></td></tr
><tr
id=sl_svn78_270

><td class="source">	}<br></td></tr
><tr
id=sl_svn78_271

><td class="source"><br></td></tr
><tr
id=sl_svn78_272

><td class="source">	// Show the photo caption<br></td></tr
><tr
id=sl_svn78_273

><td class="source">	if (snowstack_options.captions &amp;&amp; !newbieUser)<br></td></tr
><tr
id=sl_svn78_274

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_275

><td class="source">		caption.innerText = cell.info.title;<br></td></tr
><tr
id=sl_svn78_276

><td class="source">	}<br></td></tr
><tr
id=sl_svn78_277

><td class="source"><br></td></tr
><tr
id=sl_svn78_278

><td class="source">	dolly.style.webkitTransform = cameraTransformForCell(newIndex);<br></td></tr
><tr
id=sl_svn78_279

><td class="source">	<br></td></tr
><tr
id=sl_svn78_280

><td class="source">	var currentMatrix = new WebKitCSSMatrix(document.defaultView.getComputedStyle(dolly, null).webkitTransform);<br></td></tr
><tr
id=sl_svn78_281

><td class="source">	var targetMatrix = new WebKitCSSMatrix(dolly.style.webkitTransform);<br></td></tr
><tr
id=sl_svn78_282

><td class="source">	var dx = currentMatrix.m41 - targetMatrix.m41;<br></td></tr
><tr
id=sl_svn78_283

><td class="source">	var angle = Math.min(Math.max(dx / (CXSPACING * 3), -1), 1) * 45;<br></td></tr
><tr
id=sl_svn78_284

><td class="source"><br></td></tr
><tr
id=sl_svn78_285

><td class="source">	camera.style.webkitTransform = &quot;rotateY(&quot; + angle + &quot;deg)&quot;;<br></td></tr
><tr
id=sl_svn78_286

><td class="source">	camera.style.webkitTransitionDuration = &quot;330ms&quot;;<br></td></tr
><tr
id=sl_svn78_287

><td class="source"><br></td></tr
><tr
id=sl_svn78_288

><td class="source">	if (currentTimer)<br></td></tr
><tr
id=sl_svn78_289

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_290

><td class="source">		clearTimeout(currentTimer);<br></td></tr
><tr
id=sl_svn78_291

><td class="source">	}<br></td></tr
><tr
id=sl_svn78_292

><td class="source">	<br></td></tr
><tr
id=sl_svn78_293

><td class="source">	currentTimer = setTimeout(function ()<br></td></tr
><tr
id=sl_svn78_294

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_295

><td class="source">		camera.style.webkitTransform = &quot;rotateY(0)&quot;;<br></td></tr
><tr
id=sl_svn78_296

><td class="source">		camera.style.webkitTransitionDuration = &quot;5s&quot;;<br></td></tr
><tr
id=sl_svn78_297

><td class="source">	}, 330);<br></td></tr
><tr
id=sl_svn78_298

><td class="source">}<br></td></tr
><tr
id=sl_svn78_299

><td class="source"><br></td></tr
><tr
id=sl_svn78_300

><td class="source">function snowstack_addimage(info)<br></td></tr
><tr
id=sl_svn78_301

><td class="source">{<br></td></tr
><tr
id=sl_svn78_302

><td class="source">	var cell = {};<br></td></tr
><tr
id=sl_svn78_303

><td class="source">	var n = cells.length;<br></td></tr
><tr
id=sl_svn78_304

><td class="source">	cells.push(cell);<br></td></tr
><tr
id=sl_svn78_305

><td class="source"><br></td></tr
><tr
id=sl_svn78_306

><td class="source">	var x = Math.floor(n / snowstack_options.rows);<br></td></tr
><tr
id=sl_svn78_307

><td class="source">	var y = n - x * snowstack_options.rows;<br></td></tr
><tr
id=sl_svn78_308

><td class="source">	<br></td></tr
><tr
id=sl_svn78_309

><td class="source">	if (typeof info === &quot;string&quot;)<br></td></tr
><tr
id=sl_svn78_310

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_311

><td class="source">		var imageurl = info;<br></td></tr
><tr
id=sl_svn78_312

><td class="source">		info = { &quot;thumb&quot;: imageurl, &quot;zoom&quot;: imageurl, &quot;title&quot;: &quot;&quot; };<br></td></tr
><tr
id=sl_svn78_313

><td class="source">	}<br></td></tr
><tr
id=sl_svn78_314

><td class="source"><br></td></tr
><tr
id=sl_svn78_315

><td class="source">	cell.info = info;<br></td></tr
><tr
id=sl_svn78_316

><td class="source">	<br></td></tr
><tr
id=sl_svn78_317

><td class="source">	function make_celldiv()<br></td></tr
><tr
id=sl_svn78_318

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_319

><td class="source">		var div = vfx.elem(&quot;div&quot;, { &quot;class&quot;: &quot;cell&quot;, &quot;style&quot;: &#39;width: &#39; + CWIDTH + &#39;px; height: &#39; + CHEIGHT + &#39;px&#39; });<br></td></tr
><tr
id=sl_svn78_320

><td class="source">		div.style.webkitTransform = vfx.translate3d(x * CXSPACING, y * CYSPACING, 0);<br></td></tr
><tr
id=sl_svn78_321

><td class="source">		return div;<br></td></tr
><tr
id=sl_svn78_322

><td class="source">	}<br></td></tr
><tr
id=sl_svn78_323

><td class="source"><br></td></tr
><tr
id=sl_svn78_324

><td class="source">	cell.div = make_celldiv();<br></td></tr
><tr
id=sl_svn78_325

><td class="source"><br></td></tr
><tr
id=sl_svn78_326

><td class="source">	cell.divimage = vfx.elem(&quot;img&quot;, { &quot;class&quot;: &quot;media&quot; });<br></td></tr
><tr
id=sl_svn78_327

><td class="source"><br></td></tr
><tr
id=sl_svn78_328

><td class="source">	vfx.loadhandler(cell.divimage, function ()<br></td></tr
><tr
id=sl_svn78_329

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_330

><td class="source">		layoutElement(cell.divimage, cell.divimage.width, cell.divimage.height);<br></td></tr
><tr
id=sl_svn78_331

><td class="source">		<br></td></tr
><tr
id=sl_svn78_332

><td class="source">		if (cell.info.link)<br></td></tr
><tr
id=sl_svn78_333

><td class="source">		{<br></td></tr
><tr
id=sl_svn78_334

><td class="source">			cell.div.appendChild(vfx.elem(&quot;a&quot;, { &quot;class&quot;: &quot;mover view&quot;, &quot;href&quot;: cell.info.link, &quot;target&quot;: &quot;_blank&quot; }, cell.divimage));<br></td></tr
><tr
id=sl_svn78_335

><td class="source">		}<br></td></tr
><tr
id=sl_svn78_336

><td class="source">		else<br></td></tr
><tr
id=sl_svn78_337

><td class="source">		{<br></td></tr
><tr
id=sl_svn78_338

><td class="source">			cell.div.appendChild(vfx.elem(&quot;div&quot;, { &quot;class&quot;: &quot;mover view&quot; }, cell.divimage));<br></td></tr
><tr
id=sl_svn78_339

><td class="source">		}<br></td></tr
><tr
id=sl_svn78_340

><td class="source"><br></td></tr
><tr
id=sl_svn78_341

><td class="source">		cell.div.style.opacity = 1.0;<br></td></tr
><tr
id=sl_svn78_342

><td class="source">	});<br></td></tr
><tr
id=sl_svn78_343

><td class="source"><br></td></tr
><tr
id=sl_svn78_344

><td class="source">	cell.div.style.opacity = 0;<br></td></tr
><tr
id=sl_svn78_345

><td class="source">	cellstack.appendChild(cell.div);<br></td></tr
><tr
id=sl_svn78_346

><td class="source">	cell.divimage.src = info.thumb;<br></td></tr
><tr
id=sl_svn78_347

><td class="source"><br></td></tr
><tr
id=sl_svn78_348

><td class="source">	if (y == (snowstack_options.rows - 1))<br></td></tr
><tr
id=sl_svn78_349

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_350

><td class="source">		cell.reflection = make_celldiv();<br></td></tr
><tr
id=sl_svn78_351

><td class="source"><br></td></tr
><tr
id=sl_svn78_352

><td class="source">		cell.reflectionimage = vfx.elem(&quot;img&quot;, { &quot;class&quot;: &quot;media reflection&quot; });<br></td></tr
><tr
id=sl_svn78_353

><td class="source"><br></td></tr
><tr
id=sl_svn78_354

><td class="source">		vfx.loadhandler(cell.reflectionimage, function ()<br></td></tr
><tr
id=sl_svn78_355

><td class="source">		{<br></td></tr
><tr
id=sl_svn78_356

><td class="source">			layoutElement(cell.reflectionimage, cell.reflectionimage.width, cell.reflectionimage.height);<br></td></tr
><tr
id=sl_svn78_357

><td class="source">			cell.reflection.appendChild(vfx.elem(&quot;div&quot;, { &quot;class&quot;: &quot;mover view&quot; }, cell.reflectionimage));<br></td></tr
><tr
id=sl_svn78_358

><td class="source">			cell.reflection.style.opacity = 1.0;<br></td></tr
><tr
id=sl_svn78_359

><td class="source">		});<br></td></tr
><tr
id=sl_svn78_360

><td class="source">	<br></td></tr
><tr
id=sl_svn78_361

><td class="source">		cell.reflection.style.opacity = 0;<br></td></tr
><tr
id=sl_svn78_362

><td class="source">		reflectionstack.appendChild(cell.reflection);<br></td></tr
><tr
id=sl_svn78_363

><td class="source">		cell.reflectionimage.src = info.thumb;<br></td></tr
><tr
id=sl_svn78_364

><td class="source">	}<br></td></tr
><tr
id=sl_svn78_365

><td class="source">}<br></td></tr
><tr
id=sl_svn78_366

><td class="source"><br></td></tr
><tr
id=sl_svn78_367

><td class="source">function snowstack_sort(sortkey)<br></td></tr
><tr
id=sl_svn78_368

><td class="source">{<br></td></tr
><tr
id=sl_svn78_369

><td class="source">	var sortfunc;<br></td></tr
><tr
id=sl_svn78_370

><td class="source">	if (sortkey == &#39;date&#39;) <br></td></tr
><tr
id=sl_svn78_371

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_372

><td class="source">		sortfunc = function(a, b) <br></td></tr
><tr
id=sl_svn78_373

><td class="source">		{<br></td></tr
><tr
id=sl_svn78_374

><td class="source">			var adate = new Date(&#39;1 &#39; + a.info.date);<br></td></tr
><tr
id=sl_svn78_375

><td class="source">			var bdate = new Date(&#39;1 &#39; + b.info.date);<br></td></tr
><tr
id=sl_svn78_376

><td class="source">			return bdate - adate;<br></td></tr
><tr
id=sl_svn78_377

><td class="source">		};<br></td></tr
><tr
id=sl_svn78_378

><td class="source">	} <br></td></tr
><tr
id=sl_svn78_379

><td class="source">	else <br></td></tr
><tr
id=sl_svn78_380

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_381

><td class="source">		sortfunc = function(a, b) <br></td></tr
><tr
id=sl_svn78_382

><td class="source">		{<br></td></tr
><tr
id=sl_svn78_383

><td class="source">			var aval = a.info[sortkey];<br></td></tr
><tr
id=sl_svn78_384

><td class="source">			var bval = b.info[sortkey];<br></td></tr
><tr
id=sl_svn78_385

><td class="source">			return aval &gt; bval ? 1 : aval &lt; bval ? -1 : 0;<br></td></tr
><tr
id=sl_svn78_386

><td class="source">		};<br></td></tr
><tr
id=sl_svn78_387

><td class="source">	}<br></td></tr
><tr
id=sl_svn78_388

><td class="source"><br></td></tr
><tr
id=sl_svn78_389

><td class="source">	cells.sort(sortfunc);<br></td></tr
><tr
id=sl_svn78_390

><td class="source"><br></td></tr
><tr
id=sl_svn78_391

><td class="source">	for (var i = 0; i &lt; cells.length; ++i) <br></td></tr
><tr
id=sl_svn78_392

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_393

><td class="source">		// down then across<br></td></tr
><tr
id=sl_svn78_394

><td class="source">		var x = Math.floor(i / snowstack_options.rows);<br></td></tr
><tr
id=sl_svn78_395

><td class="source">		var y = i - x * snowstack_options.rows;<br></td></tr
><tr
id=sl_svn78_396

><td class="source">		cells[i].div.style.webkitTransform = vfx.translate3d(x * CXSPACING, y * CYSPACING, 0);<br></td></tr
><tr
id=sl_svn78_397

><td class="source">	}<br></td></tr
><tr
id=sl_svn78_398

><td class="source">}<br></td></tr
><tr
id=sl_svn78_399

><td class="source"><br></td></tr
><tr
id=sl_svn78_400

><td class="source">function snowstack_startsearch()<br></td></tr
><tr
id=sl_svn78_401

><td class="source">{<br></td></tr
><tr
id=sl_svn78_402

><td class="source">	camera.style.webkitTransform = &#39;translate3d(0, 0, -500px)&#39;;<br></td></tr
><tr
id=sl_svn78_403

><td class="source">	camera.style.webkitTransitionDuration = &quot;1s&quot;;<br></td></tr
><tr
id=sl_svn78_404

><td class="source">}<br></td></tr
><tr
id=sl_svn78_405

><td class="source"><br></td></tr
><tr
id=sl_svn78_406

><td class="source">function snowstack_endsearch()<br></td></tr
><tr
id=sl_svn78_407

><td class="source">{<br></td></tr
><tr
id=sl_svn78_408

><td class="source">	camera.style.webkitTransform = &#39;&#39;;<br></td></tr
><tr
id=sl_svn78_409

><td class="source">}<br></td></tr
><tr
id=sl_svn78_410

><td class="source"><br></td></tr
><tr
id=sl_svn78_411

><td class="source">function snowstack_search(searchkey, searchterm)<br></td></tr
><tr
id=sl_svn78_412

><td class="source">{<br></td></tr
><tr
id=sl_svn78_413

><td class="source">	if (searchterm.length)<br></td></tr
><tr
id=sl_svn78_414

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_415

><td class="source">		snowstack_startsearch();<br></td></tr
><tr
id=sl_svn78_416

><td class="source">	}<br></td></tr
><tr
id=sl_svn78_417

><td class="source">	else<br></td></tr
><tr
id=sl_svn78_418

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_419

><td class="source">		snowstack_endsearch();<br></td></tr
><tr
id=sl_svn78_420

><td class="source">	}<br></td></tr
><tr
id=sl_svn78_421

><td class="source"><br></td></tr
><tr
id=sl_svn78_422

><td class="source">	var s_re = new RegExp(searchterm, &quot;i&quot;);<br></td></tr
><tr
id=sl_svn78_423

><td class="source"><br></td></tr
><tr
id=sl_svn78_424

><td class="source">	for (var i = 0; i &lt; cells.length; ++i)<br></td></tr
><tr
id=sl_svn78_425

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_426

><td class="source">		var match;<br></td></tr
><tr
id=sl_svn78_427

><td class="source">		if (searchterm.length)<br></td></tr
><tr
id=sl_svn78_428

><td class="source">		{<br></td></tr
><tr
id=sl_svn78_429

><td class="source">			match = cells[i].info[searchkey].search(s_re) != -1;<br></td></tr
><tr
id=sl_svn78_430

><td class="source">		}<br></td></tr
><tr
id=sl_svn78_431

><td class="source">		else<br></td></tr
><tr
id=sl_svn78_432

><td class="source">		{<br></td></tr
><tr
id=sl_svn78_433

><td class="source">			match = true;<br></td></tr
><tr
id=sl_svn78_434

><td class="source">		}<br></td></tr
><tr
id=sl_svn78_435

><td class="source">		cells[i].div.style.opacity = match ? 1 : 0.2;<br></td></tr
><tr
id=sl_svn78_436

><td class="source">	}<br></td></tr
><tr
id=sl_svn78_437

><td class="source">}<br></td></tr
><tr
id=sl_svn78_438

><td class="source"><br></td></tr
><tr
id=sl_svn78_439

><td class="source">global.snowstack_init = function (imagefun, options)<br></td></tr
><tr
id=sl_svn78_440

><td class="source">{<br></td></tr
><tr
id=sl_svn78_441

><td class="source">	var loading = true;<br></td></tr
><tr
id=sl_svn78_442

><td class="source">	<br></td></tr
><tr
id=sl_svn78_443

><td class="source">	camera = vfx.byid(&quot;camera&quot;);<br></td></tr
><tr
id=sl_svn78_444

><td class="source">	<br></td></tr
><tr
id=sl_svn78_445

><td class="source">	reflectionstack = vfx.elem(&quot;div&quot;, { &quot;class&quot;: &quot;view&quot; });<br></td></tr
><tr
id=sl_svn78_446

><td class="source">	var mirror = vfx.elem(&quot;div&quot;, { &quot;class&quot;: &quot;view&quot; }, reflectionstack);<br></td></tr
><tr
id=sl_svn78_447

><td class="source">	cellstack = vfx.elem(&quot;div&quot;, { &quot;class&quot;: &quot;view&quot; });<br></td></tr
><tr
id=sl_svn78_448

><td class="source">	dolly = vfx.elem(&quot;div&quot;, { &quot;class&quot;: &quot;dolly view&quot; });<br></td></tr
><tr
id=sl_svn78_449

><td class="source">	dolly.appendChild(cellstack);<br></td></tr
><tr
id=sl_svn78_450

><td class="source">	dolly.appendChild(mirror);<br></td></tr
><tr
id=sl_svn78_451

><td class="source">	<br></td></tr
><tr
id=sl_svn78_452

><td class="source">	while (camera.hasChildNodes())<br></td></tr
><tr
id=sl_svn78_453

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_454

><td class="source">		camera.removeChild(camera.firstChild);<br></td></tr
><tr
id=sl_svn78_455

><td class="source">	}<br></td></tr
><tr
id=sl_svn78_456

><td class="source"><br></td></tr
><tr
id=sl_svn78_457

><td class="source">	camera.appendChild(dolly);<br></td></tr
><tr
id=sl_svn78_458

><td class="source"><br></td></tr
><tr
id=sl_svn78_459

><td class="source">	if (options)<br></td></tr
><tr
id=sl_svn78_460

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_461

><td class="source">		for (var key in options)<br></td></tr
><tr
id=sl_svn78_462

><td class="source">		{<br></td></tr
><tr
id=sl_svn78_463

><td class="source">			if (options.hasOwnProperty(key))<br></td></tr
><tr
id=sl_svn78_464

><td class="source">			{<br></td></tr
><tr
id=sl_svn78_465

><td class="source">				snowstack_options[key] = options[key];<br></td></tr
><tr
id=sl_svn78_466

><td class="source">			}<br></td></tr
><tr
id=sl_svn78_467

><td class="source">		}<br></td></tr
><tr
id=sl_svn78_468

><td class="source">	}<br></td></tr
><tr
id=sl_svn78_469

><td class="source">	<br></td></tr
><tr
id=sl_svn78_470

><td class="source">	if (typeof imagefun !== &quot;function&quot;)<br></td></tr
><tr
id=sl_svn78_471

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_472

><td class="source">		var images_array = imagefun;<br></td></tr
><tr
id=sl_svn78_473

><td class="source">		imagefun = function (callback)<br></td></tr
><tr
id=sl_svn78_474

><td class="source">		{<br></td></tr
><tr
id=sl_svn78_475

><td class="source">			callback(images_array);<br></td></tr
><tr
id=sl_svn78_476

><td class="source">			images_array = [];<br></td></tr
><tr
id=sl_svn78_477

><td class="source">		};<br></td></tr
><tr
id=sl_svn78_478

><td class="source">	}<br></td></tr
><tr
id=sl_svn78_479

><td class="source"><br></td></tr
><tr
id=sl_svn78_480

><td class="source">	CHEIGHT = Math.round(window.innerHeight / (snowstack_options.rows + 2));<br></td></tr
><tr
id=sl_svn78_481

><td class="source">	CWIDTH = Math.round(CHEIGHT * 300 / 180);<br></td></tr
><tr
id=sl_svn78_482

><td class="source">	CXSPACING = CWIDTH + CGAP;<br></td></tr
><tr
id=sl_svn78_483

><td class="source">	CYSPACING = CHEIGHT + CGAP;<br></td></tr
><tr
id=sl_svn78_484

><td class="source"><br></td></tr
><tr
id=sl_svn78_485

><td class="source">	mirror.style.webkitTransform = &quot;scaleY(-1.0) &quot; + vfx.translate3d(0, - CYSPACING * (snowstack_options.rows * 2) - 1, 0);<br></td></tr
><tr
id=sl_svn78_486

><td class="source"><br></td></tr
><tr
id=sl_svn78_487

><td class="source">	imagefun(function (images)<br></td></tr
><tr
id=sl_svn78_488

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_489

><td class="source">		images.forEach(snowstack_addimage);<br></td></tr
><tr
id=sl_svn78_490

><td class="source">		snowstack_update(Math.floor(snowstack_options.rows / 2), false);<br></td></tr
><tr
id=sl_svn78_491

><td class="source">		loading = false;<br></td></tr
><tr
id=sl_svn78_492

><td class="source">	});<br></td></tr
><tr
id=sl_svn78_493

><td class="source"><br></td></tr
><tr
id=sl_svn78_494

><td class="source">	var keys = { left: false, right: false, up: false, down: false };<br></td></tr
><tr
id=sl_svn78_495

><td class="source"><br></td></tr
><tr
id=sl_svn78_496

><td class="source">	var keymap = { 37: &quot;left&quot;, 38: &quot;up&quot;, 39: &quot;right&quot;, 40: &quot;down&quot; };<br></td></tr
><tr
id=sl_svn78_497

><td class="source"><br></td></tr
><tr
id=sl_svn78_498

><td class="source">	var keytimer = null;<br></td></tr
><tr
id=sl_svn78_499

><td class="source">	var keydelay = 330;<br></td></tr
><tr
id=sl_svn78_500

><td class="source"><br></td></tr
><tr
id=sl_svn78_501

><td class="source">	function updatekeys()<br></td></tr
><tr
id=sl_svn78_502

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_503

><td class="source">		var newCellIndex = currentCellIndex;<br></td></tr
><tr
id=sl_svn78_504

><td class="source">		if (keys.left)<br></td></tr
><tr
id=sl_svn78_505

><td class="source">		{<br></td></tr
><tr
id=sl_svn78_506

><td class="source">			/* Left Arrow */<br></td></tr
><tr
id=sl_svn78_507

><td class="source">			if (newCellIndex &gt;= snowstack_options.rows)<br></td></tr
><tr
id=sl_svn78_508

><td class="source">			{<br></td></tr
><tr
id=sl_svn78_509

><td class="source">				newCellIndex -= snowstack_options.rows;<br></td></tr
><tr
id=sl_svn78_510

><td class="source">			}<br></td></tr
><tr
id=sl_svn78_511

><td class="source">		}<br></td></tr
><tr
id=sl_svn78_512

><td class="source">		if (keys.right)<br></td></tr
><tr
id=sl_svn78_513

><td class="source">		{<br></td></tr
><tr
id=sl_svn78_514

><td class="source">			/* Right Arrow */<br></td></tr
><tr
id=sl_svn78_515

><td class="source">			if ((newCellIndex + snowstack_options.rows) &lt; cells.length)<br></td></tr
><tr
id=sl_svn78_516

><td class="source">			{<br></td></tr
><tr
id=sl_svn78_517

><td class="source">				newCellIndex += snowstack_options.rows;<br></td></tr
><tr
id=sl_svn78_518

><td class="source">			}<br></td></tr
><tr
id=sl_svn78_519

><td class="source">			else if (!loading)<br></td></tr
><tr
id=sl_svn78_520

><td class="source">			{<br></td></tr
><tr
id=sl_svn78_521

><td class="source">				/* We hit the right wall, add some more */<br></td></tr
><tr
id=sl_svn78_522

><td class="source">				loading = true;<br></td></tr
><tr
id=sl_svn78_523

><td class="source">				imagefun(function (images)<br></td></tr
><tr
id=sl_svn78_524

><td class="source">				{<br></td></tr
><tr
id=sl_svn78_525

><td class="source">					images.forEach(snowstack_addimage);<br></td></tr
><tr
id=sl_svn78_526

><td class="source">					loading = false;<br></td></tr
><tr
id=sl_svn78_527

><td class="source">				});<br></td></tr
><tr
id=sl_svn78_528

><td class="source">			}<br></td></tr
><tr
id=sl_svn78_529

><td class="source">		}<br></td></tr
><tr
id=sl_svn78_530

><td class="source">		if (keys.up)<br></td></tr
><tr
id=sl_svn78_531

><td class="source">		{<br></td></tr
><tr
id=sl_svn78_532

><td class="source">			/* Up Arrow */<br></td></tr
><tr
id=sl_svn78_533

><td class="source">			newCellIndex -= 1;<br></td></tr
><tr
id=sl_svn78_534

><td class="source">		}<br></td></tr
><tr
id=sl_svn78_535

><td class="source">		if (keys.down)<br></td></tr
><tr
id=sl_svn78_536

><td class="source">		{<br></td></tr
><tr
id=sl_svn78_537

><td class="source">			/* Down Arrow */<br></td></tr
><tr
id=sl_svn78_538

><td class="source">			newCellIndex += 1;<br></td></tr
><tr
id=sl_svn78_539

><td class="source">		}<br></td></tr
><tr
id=sl_svn78_540

><td class="source"><br></td></tr
><tr
id=sl_svn78_541

><td class="source">		snowstack_update(newCellIndex, magnifyMode);<br></td></tr
><tr
id=sl_svn78_542

><td class="source">	}<br></td></tr
><tr
id=sl_svn78_543

><td class="source"><br></td></tr
><tr
id=sl_svn78_544

><td class="source">	function repeattimer()<br></td></tr
><tr
id=sl_svn78_545

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_546

><td class="source">		updatekeys();<br></td></tr
><tr
id=sl_svn78_547

><td class="source">		keytimer = setTimeout(repeattimer, keydelay);<br></td></tr
><tr
id=sl_svn78_548

><td class="source">		keydelay = 60;<br></td></tr
><tr
id=sl_svn78_549

><td class="source">	}<br></td></tr
><tr
id=sl_svn78_550

><td class="source"><br></td></tr
><tr
id=sl_svn78_551

><td class="source">	function keycheck()<br></td></tr
><tr
id=sl_svn78_552

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_553

><td class="source">		if (keys.left || keys.right || keys.up || keys.down)<br></td></tr
><tr
id=sl_svn78_554

><td class="source">		{<br></td></tr
><tr
id=sl_svn78_555

><td class="source">			if (keytimer === null)<br></td></tr
><tr
id=sl_svn78_556

><td class="source">			{<br></td></tr
><tr
id=sl_svn78_557

><td class="source">				keydelay = 330;<br></td></tr
><tr
id=sl_svn78_558

><td class="source">				repeattimer();<br></td></tr
><tr
id=sl_svn78_559

><td class="source">			}<br></td></tr
><tr
id=sl_svn78_560

><td class="source">		}<br></td></tr
><tr
id=sl_svn78_561

><td class="source">		else<br></td></tr
><tr
id=sl_svn78_562

><td class="source">		{<br></td></tr
><tr
id=sl_svn78_563

><td class="source">			clearTimeout(keytimer);<br></td></tr
><tr
id=sl_svn78_564

><td class="source">			keytimer = null;<br></td></tr
><tr
id=sl_svn78_565

><td class="source">		}<br></td></tr
><tr
id=sl_svn78_566

><td class="source">	}<br></td></tr
><tr
id=sl_svn78_567

><td class="source"><br></td></tr
><tr
id=sl_svn78_568

><td class="source">	/* Limited keyboard support for now */<br></td></tr
><tr
id=sl_svn78_569

><td class="source">	window.addEventListener(&#39;keydown&#39;, function (e)<br></td></tr
><tr
id=sl_svn78_570

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_571

><td class="source">		if (e.keyCode == 32)<br></td></tr
><tr
id=sl_svn78_572

><td class="source">		{<br></td></tr
><tr
id=sl_svn78_573

><td class="source">			/* Magnify toggle with spacebar */<br></td></tr
><tr
id=sl_svn78_574

><td class="source">			snowstack_update(currentCellIndex, !magnifyMode);<br></td></tr
><tr
id=sl_svn78_575

><td class="source">		}<br></td></tr
><tr
id=sl_svn78_576

><td class="source">		else if (e.keyCode == 13)<br></td></tr
><tr
id=sl_svn78_577

><td class="source">		{<br></td></tr
><tr
id=sl_svn78_578

><td class="source">			/* Toggle video playback */<br></td></tr
><tr
id=sl_svn78_579

><td class="source">			snowstack_togglemedia(currentCellIndex);<br></td></tr
><tr
id=sl_svn78_580

><td class="source">		}<br></td></tr
><tr
id=sl_svn78_581

><td class="source">		else<br></td></tr
><tr
id=sl_svn78_582

><td class="source">		{<br></td></tr
><tr
id=sl_svn78_583

><td class="source">			keys[keymap[e.keyCode]] = true;<br></td></tr
><tr
id=sl_svn78_584

><td class="source">		}<br></td></tr
><tr
id=sl_svn78_585

><td class="source">		<br></td></tr
><tr
id=sl_svn78_586

><td class="source">		keycheck();<br></td></tr
><tr
id=sl_svn78_587

><td class="source">	});<br></td></tr
><tr
id=sl_svn78_588

><td class="source"><br></td></tr
><tr
id=sl_svn78_589

><td class="source">	window.addEventListener(&#39;keyup&#39;, function (e)<br></td></tr
><tr
id=sl_svn78_590

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_591

><td class="source">		keys[keymap[e.keyCode]] = false;<br></td></tr
><tr
id=sl_svn78_592

><td class="source">		keycheck();<br></td></tr
><tr
id=sl_svn78_593

><td class="source">	});<br></td></tr
><tr
id=sl_svn78_594

><td class="source">	<br></td></tr
><tr
id=sl_svn78_595

><td class="source">	var startX = 0;<br></td></tr
><tr
id=sl_svn78_596

><td class="source">	var lastX = 0;<br></td></tr
><tr
id=sl_svn78_597

><td class="source"><br></td></tr
><tr
id=sl_svn78_598

><td class="source">	var target = document.getElementById(&quot;camera&quot;);<br></td></tr
><tr
id=sl_svn78_599

><td class="source">	<br></td></tr
><tr
id=sl_svn78_600

><td class="source">	target.addEventListener(&#39;touchstart&#39;, function (e)<br></td></tr
><tr
id=sl_svn78_601

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_602

><td class="source">		startX = event.touches[0].pageX;<br></td></tr
><tr
id=sl_svn78_603

><td class="source">		lastX = startX;<br></td></tr
><tr
id=sl_svn78_604

><td class="source">		e.preventDefault();<br></td></tr
><tr
id=sl_svn78_605

><td class="source">		return false;<br></td></tr
><tr
id=sl_svn78_606

><td class="source">	}, false);<br></td></tr
><tr
id=sl_svn78_607

><td class="source">	<br></td></tr
><tr
id=sl_svn78_608

><td class="source">	target.addEventListener(&#39;touchmove&#39;, function (e)<br></td></tr
><tr
id=sl_svn78_609

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_610

><td class="source">		lastX = event.touches[0].pageX;<br></td></tr
><tr
id=sl_svn78_611

><td class="source">		var dx = lastX - startX;<br></td></tr
><tr
id=sl_svn78_612

><td class="source">		keys.left = (dx &gt; 20);<br></td></tr
><tr
id=sl_svn78_613

><td class="source">		keys.right = (dx &lt; 20);<br></td></tr
><tr
id=sl_svn78_614

><td class="source">		updatekeys();<br></td></tr
><tr
id=sl_svn78_615

><td class="source">		startX = lastX;<br></td></tr
><tr
id=sl_svn78_616

><td class="source">		e.preventDefault();<br></td></tr
><tr
id=sl_svn78_617

><td class="source">		return false;<br></td></tr
><tr
id=sl_svn78_618

><td class="source">	}, true);<br></td></tr
><tr
id=sl_svn78_619

><td class="source">	<br></td></tr
><tr
id=sl_svn78_620

><td class="source">	target.addEventListener(&#39;touchend&#39;, function (e)<br></td></tr
><tr
id=sl_svn78_621

><td class="source">	{<br></td></tr
><tr
id=sl_svn78_622

><td class="source">		keys.left = false;<br></td></tr
><tr
id=sl_svn78_623

><td class="source">		keys.right = false;<br></td></tr
><tr
id=sl_svn78_624

><td class="source">		e.preventDefault();<br></td></tr
><tr
id=sl_svn78_625

><td class="source">		return false;<br></td></tr
><tr
id=sl_svn78_626

><td class="source">	}, true);<br></td></tr
><tr
id=sl_svn78_627

><td class="source">	<br></td></tr
><tr
id=sl_svn78_628

><td class="source">};<br></td></tr
><tr
id=sl_svn78_629

><td class="source"><br></td></tr
><tr
id=sl_svn78_630

><td class="source">//})(); // end module pattern<br></td></tr
></table></pre>
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
</td>
</tr></table>

 
<script type="text/javascript">
 var lineNumUnderMouse = -1;
 
 function gutterOver(num) {
 gutterOut();
 var newTR = document.getElementById('gr_svn78_' + num);
 if (newTR) {
 newTR.className = 'undermouse';
 }
 lineNumUnderMouse = num;
 }
 function gutterOut() {
 if (lineNumUnderMouse != -1) {
 var oldTR = document.getElementById(
 'gr_svn78_' + lineNumUnderMouse);
 if (oldTR) {
 oldTR.className = '';
 }
 lineNumUnderMouse = -1;
 }
 }
 var numsGenState = {table_base_id: 'nums_table_'};
 var srcGenState = {table_base_id: 'src_table_'};
 var alignerRunning = false;
 var startOver = false;
 function setLineNumberHeights() {
 if (alignerRunning) {
 startOver = true;
 return;
 }
 numsGenState.chunk_id = 0;
 numsGenState.table = document.getElementById('nums_table_0');
 numsGenState.row_num = 0;
 if (!numsGenState.table) {
 return; // Silently exit if no file is present.
 }
 srcGenState.chunk_id = 0;
 srcGenState.table = document.getElementById('src_table_0');
 srcGenState.row_num = 0;
 alignerRunning = true;
 continueToSetLineNumberHeights();
 }
 function rowGenerator(genState) {
 if (genState.row_num < genState.table.rows.length) {
 var currentRow = genState.table.rows[genState.row_num];
 genState.row_num++;
 return currentRow;
 }
 var newTable = document.getElementById(
 genState.table_base_id + (genState.chunk_id + 1));
 if (newTable) {
 genState.chunk_id++;
 genState.row_num = 0;
 genState.table = newTable;
 return genState.table.rows[0];
 }
 return null;
 }
 var MAX_ROWS_PER_PASS = 1000;
 function continueToSetLineNumberHeights() {
 var rowsInThisPass = 0;
 var numRow = 1;
 var srcRow = 1;
 while (numRow && srcRow && rowsInThisPass < MAX_ROWS_PER_PASS) {
 numRow = rowGenerator(numsGenState);
 srcRow = rowGenerator(srcGenState);
 rowsInThisPass++;
 if (numRow && srcRow) {
 if (numRow.offsetHeight != srcRow.offsetHeight) {
 numRow.firstChild.style.height = srcRow.offsetHeight + 'px';
 }
 }
 }
 if (rowsInThisPass >= MAX_ROWS_PER_PASS) {
 setTimeout(continueToSetLineNumberHeights, 10);
 } else {
 alignerRunning = false;
 if (startOver) {
 startOver = false;
 setTimeout(setLineNumberHeights, 500);
 }
 }
 }
 function initLineNumberHeights() {
 // Do 2 complete passes, because there can be races
 // between this code and prettify.
 startOver = true;
 setTimeout(setLineNumberHeights, 250);
 window.onresize = setLineNumberHeights;
 }
 initLineNumberHeights();
</script>

 
 
 <div id="log">
 <div style="text-align:right">
 <a class="ifCollapse" href="#" onclick="_toggleMeta(this); return false">Show details</a>
 <a class="ifExpand" href="#" onclick="_toggleMeta(this); return false">Hide details</a>
 </div>
 <div class="ifExpand">
 
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="changelog">
 <p>Change log</p>
 <div>
 <a href="/p/css-vfx/source/detail?spec=svn78&amp;r=76">r76</a>
 by charles.ying
 on Aug 5, 2009
 &nbsp; <a href="/p/css-vfx/source/diff?spec=svn78&r=76&amp;format=side&amp;path=/trunk/snowstack/snowstack.js&amp;old_path=/trunk/snowstack/snowstack.js&amp;old=75">Diff</a>
 </div>
 <pre>* Add case insensitive search
* Comment out box shadow since it is
locking the thumbnail in at a small size
</pre>
 </div>
 
 
 
 
 
 
 <script type="text/javascript">
 var detail_url = '/p/css-vfx/source/detail?r=76&spec=svn78';
 var publish_url = '/p/css-vfx/source/detail?r=76&spec=svn78#publish';
 // describe the paths of this revision in javascript.
 var changed_paths = [];
 var changed_urls = [];
 
 changed_paths.push('/trunk/snowstack/snowstack.css');
 changed_urls.push('/p/css-vfx/source/browse/trunk/snowstack/snowstack.css?r\x3d76\x26spec\x3dsvn78');
 
 
 changed_paths.push('/trunk/snowstack/snowstack.js');
 changed_urls.push('/p/css-vfx/source/browse/trunk/snowstack/snowstack.js?r\x3d76\x26spec\x3dsvn78');
 
 var selected_path = '/trunk/snowstack/snowstack.js';
 
 
 function getCurrentPageIndex() {
 for (var i = 0; i < changed_paths.length; i++) {
 if (selected_path == changed_paths[i]) {
 return i;
 }
 }
 }
 function getNextPage() {
 var i = getCurrentPageIndex();
 if (i < changed_paths.length - 1) {
 return changed_urls[i + 1];
 }
 return null;
 }
 function getPreviousPage() {
 var i = getCurrentPageIndex();
 if (i > 0) {
 return changed_urls[i - 1];
 }
 return null;
 }
 function gotoNextPage() {
 var page = getNextPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoPreviousPage() {
 var page = getPreviousPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoDetailPage() {
 window.location = detail_url;
 }
 function gotoPublishPage() {
 window.location = publish_url;
 }
</script>

 
 <style type="text/css">
 #review_nav {
 border-top: 3px solid white;
 padding-top: 6px;
 margin-top: 1em;
 }
 #review_nav td {
 vertical-align: middle;
 }
 #review_nav select {
 margin: .5em 0;
 }
 </style>
 <div id="review_nav">
 <table><tr><td>Go to:&nbsp;</td><td>
 <select name="files_in_rev" onchange="window.location=this.value">
 
 <option value="/p/css-vfx/source/browse/trunk/snowstack/snowstack.css?r=76&amp;spec=svn78"
 
 >/trunk/snowstack/snowstack.css</option>
 
 <option value="/p/css-vfx/source/browse/trunk/snowstack/snowstack.js?r=76&amp;spec=svn78"
 selected="selected"
 >/trunk/snowstack/snowstack.js</option>
 
 </select>
 </td></tr></table>
 
 
 



 
 </div>
 
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="older_bubble">
 <p>Older revisions</p>
 
 
 <div class="closed" style="margin-bottom:3px;" >
 <img class="ifClosed" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/plus.gif" >
 <img class="ifOpened" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/minus.gif" >
 <a href="/p/css-vfx/source/detail?spec=svn78&r=75">r75</a>
 by charles.ying
 on Aug 4, 2009
 &nbsp; <a href="/p/css-vfx/source/diff?spec=svn78&r=75&amp;format=side&amp;path=/trunk/snowstack/snowstack.js&amp;old_path=/trunk/snowstack/snowstack.js&amp;old=72">Diff</a>
 <br>
 <pre class="ifOpened">* Check in changes from Agent 86.

</pre>
 </div>
 
 <div class="closed" style="margin-bottom:3px;" >
 <img class="ifClosed" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/plus.gif" >
 <img class="ifOpened" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/minus.gif" >
 <a href="/p/css-vfx/source/detail?spec=svn78&r=72">r72</a>
 by charles.ying
 on Aug 2, 2009
 &nbsp; <a href="/p/css-vfx/source/diff?spec=svn78&r=72&amp;format=side&amp;path=/trunk/snowstack/snowstack.js&amp;old_path=/trunk/snowstack/snowstack.js&amp;old=71">Diff</a>
 <br>
 <pre class="ifOpened">Switchable demos
Add apple trailers

</pre>
 </div>
 
 <div class="closed" style="margin-bottom:3px;" >
 <img class="ifClosed" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/plus.gif" >
 <img class="ifOpened" onclick="_toggleHidden(this)" src="http://www.gstatic.com/codesite/ph/images/minus.gif" >
 <a href="/p/css-vfx/source/detail?spec=svn78&r=71">r71</a>
 by charles.ying
 on Aug 1, 2009
 &nbsp; <a href="/p/css-vfx/source/diff?spec=svn78&r=71&amp;format=side&amp;path=/trunk/snowstack/snowstack.js&amp;old_path=/trunk/snowstack/snowstack.js&amp;old=69">Diff</a>
 <br>
 <pre class="ifOpened">* Muting, multiple play, fix captions
</pre>
 </div>
 
 
 <a href="/p/css-vfx/source/list?path=/trunk/snowstack/snowstack.js&start=76">All revisions of this file</a>
 </div>
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="fileinfo_bubble">
 <p>File info</p>
 
 <div>Size: 12411 bytes,
 630 lines</div>
 
 <div><a href="//css-vfx.googlecode.com/svn/trunk/snowstack/snowstack.js">View raw file</a></div>
 </div>
 
 <div id="props">
 <p>File properties</p>
 <dl>
 
 <dt>svn:mime-type</dt>
 <dd>text/javascript</dd>
 
 </dl>
 </div>
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 </div>
 </div>


</div>

</div>
</div>

<script src="http://www.gstatic.com/codesite/ph/1135055050189452583/js/prettify/prettify.js"></script>
<script type="text/javascript">prettyPrint();</script>


<script src="http://www.gstatic.com/codesite/ph/1135055050189452583/js/source_file_scripts.js"></script>

 <script type="text/javascript" src="https://kibbles.googlecode.com/files/kibbles-1.3.3.comp.js"></script>
 <script type="text/javascript">
 var lastStop = null;
 var initialized = false;
 
 function updateCursor(next, prev) {
 if (prev && prev.element) {
 prev.element.className = 'cursor_stop cursor_hidden';
 }
 if (next && next.element) {
 next.element.className = 'cursor_stop cursor';
 lastStop = next.index;
 }
 }
 
 function pubRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftDestroyed(data) {
 updateCursorForCell(data.cellId, 'nocursor');
 if (initialized) {
 reloadCursors();
 }
 }
 function reloadCursors() {
 kibbles.skipper.reset();
 loadCursors();
 if (lastStop != null) {
 kibbles.skipper.setCurrentStop(lastStop);
 }
 }
 // possibly the simplest way to insert any newly added comments
 // is to update the class of the corresponding cursor row,
 // then refresh the entire list of rows.
 function updateCursorForCell(cellId, className) {
 var cell = document.getElementById(cellId);
 // we have to go two rows back to find the cursor location
 var row = getPreviousElement(cell.parentNode);
 row.className = className;
 }
 // returns the previous element, ignores text nodes.
 function getPreviousElement(e) {
 var element = e.previousSibling;
 if (element.nodeType == 3) {
 element = element.previousSibling;
 }
 if (element && element.tagName) {
 return element;
 }
 }
 function loadCursors() {
 // register our elements with skipper
 var elements = CR_getElements('*', 'cursor_stop');
 var len = elements.length;
 for (var i = 0; i < len; i++) {
 var element = elements[i]; 
 element.className = 'cursor_stop cursor_hidden';
 kibbles.skipper.append(element);
 }
 }
 function toggleComments() {
 CR_toggleCommentDisplay();
 reloadCursors();
 }
 function keysOnLoadHandler() {
 // setup skipper
 kibbles.skipper.addStopListener(
 kibbles.skipper.LISTENER_TYPE.PRE, updateCursor);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_top', 50);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_bottom', 100);
 // Register our keys
 kibbles.skipper.addFwdKey("n");
 kibbles.skipper.addRevKey("p");
 kibbles.keys.addKeyPressListener(
 'u', function() { window.location = detail_url; });
 kibbles.keys.addKeyPressListener(
 'r', function() { window.location = detail_url + '#publish'; });
 
 kibbles.keys.addKeyPressListener('j', gotoNextPage);
 kibbles.keys.addKeyPressListener('k', gotoPreviousPage);
 
 
 }
 </script>
<script src="http://www.gstatic.com/codesite/ph/1135055050189452583/js/code_review_scripts.js"></script>
<script type="text/javascript">
 function showPublishInstructions() {
 var element = document.getElementById('review_instr');
 if (element) {
 element.className = 'opened';
 }
 }
 var codereviews;
 function revsOnLoadHandler() {
 // register our source container with the commenting code
 var paths = {'svn78': '/trunk/snowstack/snowstack.js'}
 codereviews = CR_controller.setup(
 {"profileUrl":["/u/114099803274805928637/"],"token":"KQa4gkCb2FaUYWQbeFREGQ8Iea4:1336450761320","assetHostPath":"http://www.gstatic.com/codesite/ph","domainName":null,"assetVersionPath":"http://www.gstatic.com/codesite/ph/1135055050189452583","projectHomeUrl":"/p/css-vfx","relativeBaseUrl":"","projectName":"css-vfx","loggedInUserEmail":"VictorVuc@gmail.com"}, '', 'svn78', paths,
 CR_BrowseIntegrationFactory);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, showPublishInstructions);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_PUB_PLATE, pubRevealed);
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, draftRevealed);
 codereviews.registerActivityListener(CR_ActivityType.DISCARD_DRAFT_COMMENT, draftDestroyed);
 
 
 
 
 
 
 
 var initialized = true;
 reloadCursors();
 }
 window.onload = function() {keysOnLoadHandler(); revsOnLoadHandler();};

</script>
<script type="text/javascript" src="http://www.gstatic.com/codesite/ph/1135055050189452583/js/dit_scripts.js"></script>

 
 
 
 <script type="text/javascript" src="http://www.gstatic.com/codesite/ph/1135055050189452583/js/ph_core.js"></script>
 
 
 
 
 <script type="text/javascript" src="/js/codesite_product_dictionary_ph.pack.04102009.js"></script>
</div> 
<div id="footer" dir="ltr">
 <div class="text">
 <a href="/projecthosting/terms.html">Terms</a> -
 <a href="http://www.google.com/privacy.html">Privacy</a> -
 <a href="/p/support/">Project Hosting Help</a>
 </div>
</div>
 <div class="hostedBy" style="margin-top: -20px;">
 <span style="vertical-align: top;">Powered by <a href="http://code.google.com/projecthosting/">Google Project Hosting</a></span>
 </div>
 
 


 
 </body>
</html>

