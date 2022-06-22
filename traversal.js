const arrayTraversal = (arrayOfNodes) => {
  let html = "";
  arrayOfNodes.map((obj) => {
    if (typeof obj === "string") {
      html += `<li>${obj}</li>`;
    } else if (typeof obj === "object") {
      html += objectTraversal(obj);
    }
  });

  return `<ul>${html}</ul>`;
};

const objectTraversal = (obj) => {
  let html = "";
  Object.entries(obj).forEach(([key, value]) => {
    if (key === "name") {
      html += `<li>${value}</li>`;
    } else if (key === "nodes") {
      console.log("process nodes " + value);
      html += arrayTraversal(value);
    }
  });

  return html;
};
