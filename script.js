const products = [
    { name:"Greek Salad",price:"2.500",cat:"morning",desc:"Fresh tomatoes, cucumber, olives & feta cheese.",img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300" },
    { name:"Classic Pancake",price:"2.800",cat:"morning",desc:"Fluffy pancakes served with honey and berries.",img:"https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=300" },
    { name:"Eggs Benedict",price:"3.900",cat:"morning",desc:"Poached eggs with hollandaise sauce on muffins.",img:"https://images.unsplash.com/photo-1600335895229-6e75511892c8?w=300" },
    { name:"Lasagne",price:"4.500",cat:"lunch",desc:"Layers of pasta, vegetables, cheese & tomato sauce.",img:"https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=300" },
    { name:"Club Sandwich",price:"3.500",cat:"lunch",desc:"Triple-layer sandwich with chicken, egg & fries.",img:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300" },
    { name:"Olivas Rellenas",price:"3.200",cat:"lunch",desc:"Stuffed olives with avocado & crab meat.",img:"https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=300" },
    { name:"Chicken Biryani",price:"4.800",cat:"lunch",desc:"Fragrant rice cooked with spiced chicken.",img:"https://images.unsplash.com/photo-1544124499-58912cbddaad?w=300" },
    { name:"Beef Burger",price:"3.900",cat:"lunch",desc:"Juicy beef patty with cheese and special sauce.",img:"https://images.unsplash.com/photo-1550547660-d9450f859349?w=300" },
    { name:"Grilled Salmon",price:"6.900",cat:"dinner",desc:"Fresh Atlantic salmon with lemon butter sauce.",img:"https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300" },
    { name:"Mixed Grill",price:"8.500",cat:"dinner",desc:"Assorted kebabs, kofta & lamb chops.",img:"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300" },
    { name:"Tokusen Wagyu",price:"9.000",cat:"dinner",desc:"Premium wagyu beef with seasonal vegetables.",img:"https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },
    { name:"Grilled Salmon",price:"6.900",cat:"mess",desc:"Fresh Atlantic salmon with lemon butter sauce.",img:"https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300" },
    { name:"Mixed Grill",price:"8.500",cat:"mess",desc:"Assorted kebabs, kofta & lamb chops.",img:"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300" },
    { name:"Tokusen Wagyu",price:"9.000",cat:"mess",desc:"Premium wagyu beef with seasonal vegetables.",img:"https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },
    { name:"Omani Shuwa",price:"7.500",cat:"dinner",desc:"Traditional slow-cooked marinated lamb.",img:"https://images.unsplash.com/photo-1544124499-58912cbddaad?w=300" }
];

const container = document.getElementById("menu-container");
const phone = "96878508512";

if (!container) {
    console.error("menu-container not found");
}

function render(filter = "all") {
    if (!container) return;

    const filtered = products.filter(
        p => filter === "all" || p.cat === filter
    );

    if (filtered.length === 0) {
        container.innerHTML = `<p style="text-align:center;color:#777;">No items available</p>`;
        return;
    }

    const html = filtered.map(p => {
        const msg = encodeURIComponent(
            `Hello 👋\nI would like to order:\n\n🍽️ ${p.name}\n💰 Price: OMR ${p.price}`
        );

        return `
        <div class="menu-item">
            <img src="${p.img}" class="item-img" loading="lazy">
            <div class="item-info">
                <div class="item-header">
                    <h3>${p.name}</h3>
                </div>
                 <h4 class="price">OMR ${p.price}</h4>
                <p>${p.desc}</p>
                <a class="order-btn"
                   href="https://wa.me/${phone}?text=${msg}"
                   target="_blank">
                   <i class="fab fa-whatsapp"></i> Order
                </a>
            </div>
        </div>`;
    }).join("");

    container.innerHTML = html;
}

document.querySelectorAll(".filter-nav li").forEach(li => {
    li.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove("active");
        li.classList.add("active");
        render(li.dataset.filter);
    });
});

render();
