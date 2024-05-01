import React from "react";

function Switch({ useType1Formula, setType1Formula }) {
  function handleChange() {
    setType1Formula((prev) => !prev);
  }

  return (
    <div>
      <label>
        Use Formula1
        <input
          type="checkbox"
          checked={useType1Formula}
          onChange={handleChange}
        />
      </label>
      <label>
        Use Formula2
        <input
          type="checkbox"
          checked={!useType1Formula}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

//     <label>
// Use Formula1
// <input type="checkbox" checked={useType1Formula} onChange={handleChange} />
// Use Formula1
// <input type = 'checkbox' checked={useType1Formula} onChange={setType1Formula}/>
// </label>
//  );
// }

// export default Switch
