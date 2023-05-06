import "./App.css";

import { useState } from "react";
import TextSelectionToolbar from "./components/TextSelectionToolbar";

function App() {
  const [selectedText, setSelectedText] = useState<String>("");
  const [isEditable, setIsEditable] = useState<boolean>(false);

  const handleSelection = () => {
    const selection = window.getSelection();
    if(selection?.toString().length === 1) return;
    setSelectedText(selection!.toString());
    setIsEditable(true);

    const parentElement = selection!.anchorNode!.parentElement;
    if (parentElement) {
      parentElement.contentEditable = "true";
    }
  };

  const handleBoldClick = () => {
    const range = window.getSelection()!.getRangeAt(0);
    const boldElement = document.createElement("b");
    boldElement.textContent = range.toString();
    range.deleteContents();
    range.insertNode(boldElement);
  };

  const handleUnderlineClick = () => {
    const range = window.getSelection()!.getRangeAt(0);
    const underlineElement = document.createElement("u");
    underlineElement.textContent = range.toString();
    range.deleteContents();
    range.insertNode(underlineElement);
  };

  const handleItalicClick = () => {
    const range = window.getSelection()!.getRangeAt(0);
    const italicElement = document.createElement("i");
    italicElement.textContent = range.toString();
    range.deleteContents();
    range.insertNode(italicElement);
  };

  const handleInput = () => {
    const selection = window.getSelection()!;
    setSelectedText(selection.toString());
  };

  return (
    <div>
      <p
        onMouseUp={handleSelection}
        onInput={handleInput}
        className="main"
        spellCheck={false}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sint
        laboriosam quas, porro repudiandae perspiciatis tempora, aspernatur, cum
        adipisci eum quisquam culpa eligendi reprehenderit blanditiis illum ut
        nemo. Iste iusto atque laborum ut. Nostrum culpa ut natus, quisquam
        earum suscipit fugiat debitis autem. Modi debitis quas exercitationem
        nostrum doloribus! Dolore! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Laboriosam id quam nostrum quisquam accusantium
        dolore? Dolor assumenda architecto nisi quasi dolores rem corrupti eum!
        Deserunt illo nobis dolores, odit fugit quis adipisci assumenda repellat
        eos ipsa quaerat fugiat voluptate maiores? Distinctio est eum hic saepe
        possimus? Accusantium commodi exercitationem est obcaecati cupiditate
        alias atque molestias cum quos, eos tenetur hic. Quo voluptates
        explicabo eveniet. Magnam veniam eum totam provident, nobis atque
        explicabo est eveniet nesciunt. Saepe repudiandae quidem ex ut,
        architecto natus optio doloribus ducimus suscipit earum cumque quam
        culpa dolorum aut! Eligendi est quidem ipsam laborum maxime itaque
        consequuntur.
        <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia quasi
        assumenda temporibus magni amet, labore reprehenderit recusandae neque
        et ratione, laudantium officiis officia dolores fugit? Officia dolores,
        vel tenetur consectetur perferendis earum rerum asperiores quod dicta
        voluptatibus ab? Ratione molestias, odit inventore accusamus mollitia id
        error distinctio suscipit quae incidunt amet nostrum perspiciatis
        necessitatibus ex, fugiat reprehenderit neque! Nemo aperiam harum
        suscipit explicabo reprehenderit ipsam? Facilis, doloribus id aperiam
        aut laboriosam, minima, est quos quibusdam quia reiciendis voluptas
        velit! Iusto accusamus, enim unde illo reprehenderit inventore
        perspiciatis qui at architecto, dolor et ut officiis quia dicta veniam,
        est rem eveniet assumenda nesciunt ad soluta neque. Necessitatibus ea
        saepe, expedita illo repudiandae mollitia non possimus tempore. Quidem
        magni labore deserunt ducimus vero quae eos itaque magnam incidunt error
        quo harum dolores aut nesciunt, possimus enim distinctio modi,
        consequuntur cupiditate
        <br />
        voluptatibus! Autem nemo error excepturi officia! Deleniti, amet saepe.
        Sapiente ducimus illum enim, labore sit earum quos. Veritatis
        accusantium fugit aut odit cum nobis at, enim repellat aperiam debitis
        blanditiis architecto aliquam laborum quas sequi, sed voluptatibus?
        Voluptate porro molestiae, omnis id neque corporis, maiores quam
        temporibus error totam blanditiis tempora! Labore fugit facilis iure
        esse architecto? Mollitia quidem facilis aliquid quibusdam odio. Rem
        reprehenderit exercitationem animi harum dicta quos vel quisquam atque
        iusto molestias placeat eos, veniam, est ducimus odit? Sint asperiores
        vitae repudiandae animi ducimus inventore. Voluptate sit, magnam
        inventore perferendis, excepturi iure praesentium distinctio, adipisci
        pariatur corrupti architecto numquam est eligendi minima. Veritatis
        similique pariatur ipsa, repellendus ratione nobis! Quod id quos quidem
        autem labore, deleniti consequuntur rem in amet reiciendis optio nostrum
        aliquam facilis. Minima deleniti quibusdam non quae numquam vero ratione
        magni hic harum, laborum autem error, aliquid et consequatur quos modi.
        Provident quidem deleniti iure laborum vero quibusdam sint quae magni,
        laboriosam, nesciunt reprehenderit. Beatae, magnam!
        -------------------------------------------------------------------
        <br />
        <br />
      </p>
      {isEditable && (
        <TextSelectionToolbar
          onBoldClick={handleBoldClick}
          onUnderlineClick={handleUnderlineClick}
          onItalicClick={handleItalicClick}
        />
      )}
    </div>
  );
}

export default App;
