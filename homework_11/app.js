processTree(document.getElementById('root'), structure);

function processTree (parent, array) {
  array.forEach(function (node) {
    if (node.folder) {
      addFolder(parent, node.title, node.children);
    } else {
      addFile(parent, node.title);
    }
  })
}

function addFolder (node, title, children) {
  const container = document.createElement('div');
  const childrenContainer = document.createElement('div');
  const line = document.createElement('div');
  const icon = document.createElement('i');
  const label = document.createElement('span');
  childrenContainer.className = 'children hidden';
  icon.className = 'material-icons folder';
  icon.textContent = 'folder';
  label.textContent = title;
  line.className = 'line';
  line.closed = true;
  line.onclick = toggleFolder.bind(line, icon, childrenContainer);
  line.appendChild(icon);
  line.appendChild(label);
  if (children) {
    processTree(childrenContainer, children);
  } else {
    const empty = document.createElement('div');
    const sign = document.createElement('span');
    sign.textContent = 'Folder is empty';
    sign.className = 'italic';
    empty.className = 'line';
    empty.appendChild(sign);
    childrenContainer.appendChild(empty);
  }
  container.appendChild(line);
  container.appendChild(childrenContainer);
  node.appendChild(container);
}

function addFile (node, title) {
  const line = document.createElement('div');
  const icon = document.createElement('i');
  const label = document.createElement('span');
  icon.className = 'material-icons file';
  icon.textContent = 'insert_drive_file';
  label.textContent = title;
  line.className = 'line';
  line.appendChild(icon);
  line.appendChild(label);
  node.appendChild(line);
}

function toggleFolder (icon, childrenContainer) {
  if (this.closed) {
    icon.textContent = 'folder_open';
    childrenContainer.className = 'children';
    this.closed = false;
  } else {
    icon.textContent = 'folder';
    childrenContainer.className = 'children hidden';
    this.closed = true;
  }
}