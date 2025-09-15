document.addEventListener("DOMContentLoaded", function() {
    // Typed.js animation
    var typed = new Typed(".text", {
        strings: ["Network Administrator", "Web Developer", "Athlete"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    // Orbiting nodes animation
    const nodes = document.querySelectorAll('.node');
    let angle = 0;

    function animateNodes() {
        angle += 0.5;
        nodes.forEach((node, index) => {
            let rotationSpeed = 0.5 + index * 0.1;
            let distance = 150 + index * 10;
            let currentAngle = angle * rotationSpeed;
            node.style.transform = `rotate(${currentAngle}deg) translateX(${distance}px) rotate(${-currentAngle}deg)`;
        });
        requestAnimationFrame(animateNodes);
    }
    animateNodes();

    // Floating blob
    const blob = document.querySelector('.cyber-blob');
    let floatAngle = 0;

    function floatBlob() {
        floatAngle += 0.5;
        let x = Math.sin(floatAngle * Math.PI / 180) * 10;
        let y = Math.cos(floatAngle * Math.PI / 180) * 10;
        blob.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${floatAngle}deg)`;
        requestAnimationFrame(floatBlob);
    }
    floatBlob();
});
