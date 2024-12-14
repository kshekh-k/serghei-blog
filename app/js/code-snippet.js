 
    const snippet1 = `
  <span class="text-green-400 text-left">Unable to find installed server supporting this file.</span>
  <span class="text-green-400 text-left">The following servers could be installed automatically:</span>
    `;  
    const snippet2 = `
  <span class="text-blue-400 text-left">/usr/bin/npm -g \</span>
  <span class="text-pink-400 text-left">--prefix ~/.emacs.d/.cache/lsp/npm/pyright \</span>
  <span class="text-yellow-400 text-left">install pyright</span>
    `;
    const snippet = `
<span class="text-green-400"># Python Code Example</span>
<span class="text-blue-400">def</span> <span class="text-yellow-400">greet</span>(<span class="text-pink-400">name</span>):
    <span class="text-blue-400">return</span> f<span class="text-pink-400">"Hello, {name}!"</span>

<span class="text-blue-400">print</span>(<span class="text-yellow-400">greet</span>(<span class="text-pink-400">"World"</span>))

<span class="text-green-400">;; Emacs Lisp Code Example</span>
<span class="text-blue-400">(defun</span> <span class="text-yellow-400">setup-python-environment</span> ()
  <span class="text-pink-400">"Setup a Python development environment in the current buffer."</span>

  <span class="text-green-400">;; Enable YASnippet mode</span>
  <span class="text-blue-400">(yas-minor-mode</span> <span class="text-pink-400">1</span>))

<span class="text-green-400">;; Configure hooks after</span> <span class="text-yellow-400">\`python-mode\`</span> <span class="text-green-400">is loaded.</span>
<span class="text-blue-400">(add-hook</span> <span class="text-pink-400">'python-mode-hook</span> <span class="text-yellow-400">#'setup-python-environment</span>)
    `;

    // Insert the snippet into the page
    document.getElementById('snippet1').querySelector('code').innerHTML = snippet1;
    document.getElementById('snippet2').querySelector('code').innerHTML = snippet2;
 



     // Function to copy code to the clipboard
     document.getElementById('copy-btn').addEventListener('click', function () {
        const codeSnippet = document.getElementById('snippet').innerText;
  
        // Copy text to clipboard
        navigator.clipboard.writeText(codeSnippet).then(() => {
          alert('Code copied to clipboard!');
        }).catch(err => {
          alert('Failed to copy: ' + err);
        });
      });