import{g as n,f as s,A as a}from"./common-ab061852.js";const t='{"title":"A Crash Course","frontmatter":{},"headers":[{"level":2,"title":"Getting Started","slug":"getting-started"},{"level":2,"title":"The first test - a todo is rendered","slug":"the-first-test-a-todo-is-rendered"},{"level":2,"title":"Making the test pass","slug":"making-the-test-pass"},{"level":2,"title":"Adding a new todo","slug":"adding-a-new-todo"},{"level":2,"title":"Completing a todo","slug":"completing-a-todo"},{"level":2,"title":"Arrange, Act, Assert","slug":"arrange-act-assert"},{"level":2,"title":"Conclusion","slug":"conclusion"}],"lastUpdated":1598528079978.646}';var e={};const o=a('<h1 id="a-crash-course"><a class="header-anchor" href="#a-crash-course" aria-hidden="true">#</a> A Crash Course</h1><p>Let&#39;s jump right into it, and learn Vue Test Utils (VTU) by building a simple Todo app, and writing tests as we go. This guide will cover:</p><ul><li>mounting components</li><li>finding elements</li><li>filling out forms</li><li>triggering events</li></ul><p>A working repository with this example can be found <a href="https://github.com/lmiller1990/vtu-next-demo" target="_blank" rel="noopener noreferrer">here</a>. The component file is <a href="https://github.com/lmiller1990/vtu-next-demo/blob/master/src/TodoApp.vue" target="_blank" rel="noopener noreferrer">here</a> and the the test is <a href="https://github.com/lmiller1990/vtu-next-demo/blob/master/src/TodoApp.spec.js" target="_blank" rel="noopener noreferrer">here</a>.</p><h2 id="getting-started"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h2><p>We will start off with a simple <code>TodoApp</code> component with a single todo:</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;TodoApp&#39;</span><span class="token punctuation">,</span>\n\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      todos<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n          text<span class="token operator">:</span> <span class="token string">&#39;Learn Vue.js 3&#39;</span><span class="token punctuation">,</span>\n          completed<span class="token operator">:</span> <span class="token boolean">false</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="the-first-test-a-todo-is-rendered"><a class="header-anchor" href="#the-first-test-a-todo-is-rendered" aria-hidden="true">#</a> The first test - a todo is rendered</h2><p>The first test we will write verifies a todo is rendered. Let&#39;s see the test first, then discuss each part:</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue/test-utils&#39;</span>\n<span class="token keyword">import</span> TodoApp <span class="token keyword">from</span> <span class="token string">&#39;./TodoApp.vue&#39;</span>\n\n<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;renders a todo&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">mount</span><span class="token punctuation">(</span>TodoApp<span class="token punctuation">)</span>\n\n  <span class="token keyword">const</span> todo <span class="token operator">=</span> wrapper<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;[data-test=&quot;todo&quot;]&#39;</span><span class="token punctuation">)</span>\n\n  <span class="token function">expect</span><span class="token punctuation">(</span>todo<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&#39;Learn Vue.js 3&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>We start off by importing <code>mount</code> - this is the main way to render a component in VTU. You declare a test by using the <code>test</code> function with a short description of the test. The <code>test</code> and <code>expect</code> functions are globally available in most test runners (this example uses <a href="https://jestjs.io/en/" target="_blank" rel="noopener noreferrer">Jest</a>). If <code>test</code> and <code>expect</code> look confusing, the Jest documentation has a <a href="https://jestjs.io/docs/en/getting-started" target="_blank" rel="noopener noreferrer">more simple example</a> of how to use them and how they work.</p><p>Next, we call <code>mount</code> and pass the component as the first argument - this is something almost every test you write will do. By convention, we assign the result to a variable called <code>wrapper</code>, since <code>mount</code> provides a simple &quot;wrapper&quot; around the app with some convenient methods for testing.</p><p>Finally, we use another global function common to many tests runner - Jest included - <code>expect</code>. The idea is we are asserting, or <em>expecting</em>, the actual output to match what we think it should be. In this case, we are finding an element with the selector <code>data-test=&quot;todo&quot;</code> - in the DOM, this will look like <code>&lt;div data-test=&quot;todo&quot;&gt;...&lt;/div&gt;</code>. We then call the <code>text</code> method to get the content, which we expect to be <code>&#39;Learn Vue.js 3&#39;</code>.</p><blockquote><p>Using <code>data-test</code> selectors is not required, but it can make your tests less brittle. classes and ids tend to change or move around as an application grows - by using <code>data-test</code>, it&#39;s clear to other developers which elements are used in tests, and should not be changed.</p></blockquote><h2 id="making-the-test-pass"><a class="header-anchor" href="#making-the-test-pass" aria-hidden="true">#</a> Making the test pass</h2><p>If we run this test now, it fails with the following error message: <code>Cannot call text on an empty wrapper</code>. That&#39;s because we aren&#39;t rendering any todo item, so the <code>find()</code> call is failing to return a wrapper (remember, VTU wraps all components, and DOM elements, in a &quot;wrapper&quot; with some convenient methods). Let&#39;s update <code>&lt;template&gt;</code> in <code>TodoApp.vue</code> to render the <code>todos</code> array:</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n      <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo in todos<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo.id<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">data-test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">&gt;</span></span>\n      {{ todo.text }}\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>With this change, the test is passing. Congratulations! You wrote your first component test.</p><h2 id="adding-a-new-todo"><a class="header-anchor" href="#adding-a-new-todo" aria-hidden="true">#</a> Adding a new todo</h2><p>The next feature we will be adding is for the user to be able to create a new todo. To do so, we need a form with an input for the user to type some text. When the user submits the form, we expect the new todo to be rendered. Let&#39;s take a look at the test:</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue/test-utils&#39;</span>\n<span class="token keyword">import</span> TodoApp <span class="token keyword">from</span> <span class="token string">&#39;./TodoApp.vue&#39;</span>\n\n<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;creates a todo&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">mount</span><span class="token punctuation">(</span>TodoApp<span class="token punctuation">)</span>\n  <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token string">&#39;[data-test=&quot;todo&quot;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveLength</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n\n  wrapper<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;[data-test=&quot;new-todo&quot;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token string">&#39;New todo&#39;</span><span class="token punctuation">)</span>\n  wrapper<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;[data-test=&quot;form&quot;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&#39;submit&#39;</span><span class="token punctuation">)</span>\n\n  <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token string">&#39;[data-test=&quot;todo&quot;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveLength</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>As usual, we start of by using <code>mount</code> to render the element. We are also asserting that only 1 todo is rendered - this makes it clear that we are adding an additional todo, as the final line of the test suggests.</p><p>To update the <code>&lt;input&gt;</code>, we use <code>setValue</code> - this allows us to set the input&#39;s value.</p><p>After updating the <code>&lt;input&gt;</code>, we use the <code>trigger</code> method to simulate the user submitting the form. Finally, we assert the number of todo items has increased from 1 to 2.</p><p>If we run this test, it will obviously fail. Let&#39;s update <code>TodoApp.vue</code> to have the <code>&lt;form&gt;</code> and <code>&lt;input&gt;</code> elements and make the test pass:</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n      <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo in todos<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo.id<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">data-test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">&gt;</span></span>\n      {{ todo.text }}\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">data-test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@submit.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>createTodo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">data-test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>new-todo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>newTodo<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;TodoApp&#39;</span><span class="token punctuation">,</span>\n\n  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      newTodo<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n      todos<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n          text<span class="token operator">:</span> <span class="token string">&#39;Learn Vue.js 3&#39;</span><span class="token punctuation">,</span>\n          completed<span class="token operator">:</span> <span class="token boolean">false</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">createTodo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n        text<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>newTodo<span class="token punctuation">,</span>\n        completed<span class="token operator">:</span> <span class="token boolean">false</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>We are using <code>v-model</code> to bind to the <code>&lt;input&gt;</code> and <code>@submit</code> to listen for the form submission. When the form is submitted, <code>createTodo</code> is called and inserts a new todo into the <code>todos</code> array.</p><p>While this looks good, running the test shows an error:</p><div class="language-"><pre><code>expect(received).toHaveLength(expected)\n\n    Expected length: 2\n    Received length: 1\n    Received array:  [{&quot;element&quot;: &lt;div data-test=&quot;todo&quot;&gt;Learn Vue.js 3&lt;/div&gt;}]\n</code></pre></div><p>The number of todos has not increased. The problem is that Jest executes tests in a synchronous manner, ending the test as soon as the final function is called. Vue, however, updates the DOM asynchronously. We need to mark the test <code>async</code>, and call <code>await</code> on any methods that might cause the DOM to change. <code>trigger</code> is one such methods, and so is <code>setValue</code> - we can simply prepend <code>await</code> and the test should work as expected:</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue/test-utils&#39;</span>\n<span class="token keyword">import</span> TodoApp <span class="token keyword">from</span> <span class="token string">&#39;./TodoApp.vue&#39;</span>\n\n<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;creates a todo&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">mount</span><span class="token punctuation">(</span>TodoApp<span class="token punctuation">)</span>\n\n  <span class="token keyword">await</span> wrapper<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;[data-test=&quot;new-todo&quot;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token string">&#39;New todo&#39;</span><span class="token punctuation">)</span>\n  <span class="token keyword">await</span> wrapper<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;[data-test=&quot;form&quot;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&#39;submit&#39;</span><span class="token punctuation">)</span>\n\n  <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token string">&#39;[data-test=&quot;todo&quot;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveLength</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>Now the test is finally passing!</p><h2 id="completing-a-todo"><a class="header-anchor" href="#completing-a-todo" aria-hidden="true">#</a> Completing a todo</h2><p>Now that we can create todos, let&#39;s give the user the ability to mark a todo item as completed/uncompleted with a checkbox. As previously, let&#39;s start with the failing test:</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue/test-utils&#39;</span>\n<span class="token keyword">import</span> TodoApp <span class="token keyword">from</span> <span class="token string">&#39;./TodoApp.vue&#39;</span>\n\n<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;completes a todo&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">mount</span><span class="token punctuation">(</span>TodoApp<span class="token punctuation">)</span>\n\n  <span class="token keyword">await</span> wrapper<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;[data-test=&quot;todo-checkbox&quot;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>\n\n  <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;[data-test=&quot;todo&quot;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">classes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toContain</span><span class="token punctuation">(</span><span class="token string">&#39;completed&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>This test is similar to the previous two; we find an element and interact with it in same way (we use <code>setValue</code> again, since we are interacting with a <code>&lt;input&gt;</code>).</p><p>Lastly, we make an assertion. We will be applying a <code>completed</code> class to completed todos - we can then use this to add some styling to visually indicate the status of a todo.</p><p>We can get this test to pass by updating the <code>&lt;template&gt;</code> to include the <code>&lt;input type=&quot;checkbox&quot;&gt;</code> and a class binding on the todo element:</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n      <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo in todos<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo.id<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">data-test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[ todo.completed ? <span class="token punctuation">&#39;</span>completed<span class="token punctuation">&#39;</span> : <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span> ]<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">&gt;</span></span>\n      {{ todo.text }}\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>\n        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo.completed<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">data-test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo-checkbox<span class="token punctuation">&quot;</span></span>\n      <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">data-test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@submit.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>createTodo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">data-test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>new-todo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>newTodo<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>Congratulations! You wrote your first component tests.</p><h2 id="arrange-act-assert"><a class="header-anchor" href="#arrange-act-assert" aria-hidden="true">#</a> Arrange, Act, Assert</h2><p>You may have noticed some new lines between the code in each of the tests. Let&#39;s look at the second test again, in detail:</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue/test-utils&#39;</span>\n<span class="token keyword">import</span> TodoApp <span class="token keyword">from</span> <span class="token string">&#39;./TodoApp.vue&#39;</span>\n\n<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;creates a todo&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">mount</span><span class="token punctuation">(</span>TodoApp<span class="token punctuation">)</span>\n\n  <span class="token keyword">await</span> wrapper<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;[data-test=&quot;new-todo&quot;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token string">&#39;New todo&#39;</span><span class="token punctuation">)</span>\n  <span class="token keyword">await</span> wrapper<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;[data-test=&quot;form&quot;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&#39;submit&#39;</span><span class="token punctuation">)</span>\n\n  <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token string">&#39;[data-test=&quot;todo&quot;]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveLength</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>The test is split into three distinct stages, separated by new lines. The three stages represent the three phases of a test: <strong>arrange</strong>, <strong>act</strong> and <strong>assert</strong>.</p><p>In the <em>arrange</em> phase, we are setting up the scenario for the test. A more complex example may require creating a Vuex store, or populating a database.</p><p>In the <em>act</em> phase, we act out the scenario, simulating how a user would interact with the component or application.</p><p>In the <em>assert</em> phase, we make assertions about how we expect the current state of the component to be.</p><p>Almost all test will follow these three phases. You don&#39;t need to separate them with new lines like this guide does, but it is good to keep these three phases in mind as you write your tests.</p><h2 id="conclusion"><a class="header-anchor" href="#conclusion" aria-hidden="true">#</a> Conclusion</h2><ul><li>Use <code>mount()</code> to render a component.</li><li>Use <code>get()</code> and <code>findAll()</code> to query the DOM.</li><li><code>trigger()</code> and <code>setChecked()</code> are helpers to simulate user input.</li><li>Updating the DOM is an async operation, so make sure to use <code>async</code> and <code>await</code>.</li><li>Testing usually consists of 3 phases; act, arrange and assert.</li></ul>',50);e.render=function(a,t,e,p,c,u){return s(),n("div",null,[o])};export default e;export{t as __pageData};