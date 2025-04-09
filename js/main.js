var NIZ_FIGURA = ["top", "konj", "lovac", "dama", "kralj", "pesak"];

class Figura {
	constructor(x, y, tip, boja) {
		this.x = x;
		this.y = y;
		this.tip = tip;
		this.boja = boja;
	}
}

class Lovac extends Figura {
	constructor(x, y, tip, boja) {
		super(x, y, tip, boja);
	}
	
	proveri_potez(novo_x, novo_y) {
		var pomeraj_x = novo_x - this.x;
		var pomeraj_y = novo_y - this.y;
		
		if (Math.abs(pomeraj_x) == Math.abs(pomeraj_y)) return true;
		
		return false;
	}
	
	//Method checks if a piece is on the path
	proveri_putanju(novo_x, novo_y) {
		var pomeraj_x = this.x - novo_x;
		var pomeraj_y = this.y - novo_y;
		
		var i = parseInt(this.x);
		var j = parseInt(this.y);
		var ne_sadrzi_figuru = true;
		
		for (;;) {
			if (pomeraj_x < 0) i = i + 1;
			else i = i - 1;
			
			if (pomeraj_y < 0) j = j + 1;
			else j = j - 1;
			
			if (i == novo_x) break;
			
			$(".field_div").each(function() {
				if ($(this).attr("data-x") == i && $(this).attr("data-y") == j) {
					if ($(this).hasClass("player_black") || $(this).hasClass("player_white")) {
						// postoji figura na polju
						ne_sadrzi_figuru = false;
					}
					
					return;
				}
			});
			
			if (!ne_sadrzi_figuru) break;
		}
		
		return ne_sadrzi_figuru;
	}
	
}

class Top extends Figura {
	constructor(x, y, tip, boja) {
		super(x, y, tip, boja);
	}
	
	proveri_potez(novo_x, novo_y) {
		var pomeraj_x = novo_x - this.x;
		var pomeraj_y = novo_y - this.y;
		
		if (pomeraj_x == 0 || pomeraj_y == 0) return true;
		
		return false;
	}
	

	//Method checks if a piece is on the path
	proveri_putanju(novo_x, novo_y) {
		var pomeraj_x = this.x - novo_x;
		var pomeraj_y = this.y - novo_y;
		
		var i = parseInt(this.x);
		var j = parseInt(this.y);
		var ne_sadrzi_figuru = true;
		
		for (;;) {
			if (pomeraj_x < 0) i = i + 1;
			else if (pomeraj_x > 0) i = i - 1;
			
			if (pomeraj_y < 0) j = j + 1;
			else if (pomeraj_y > 0) j = j - 1;
			
			if (i == novo_x && j == novo_y) break;
			
			$(".field_div").each(function() {
				if ($(this).attr("data-x") == i && $(this).attr("data-y") == j) {
					if ($(this).hasClass("player_black") || $(this).hasClass("player_white")) {
						// postoji figura na polju
						ne_sadrzi_figuru = false;
					}
					
					return;
				}
			});
			
			if (!ne_sadrzi_figuru) break;
		}
		
		return ne_sadrzi_figuru;
	}
	
}

class Konj extends Figura {
	constructor(x, y, tip, boja) {
		super(x, y, tip, boja);
	}
	
	proveri_potez(novo_x, novo_y) {
		var pomeraj_x = Math.abs(novo_x - this.x);
		var pomeraj_y = Math.abs(novo_y - this.y);
		
		if ((pomeraj_x == 1 && pomeraj_y == 2) || (pomeraj_x == 2 && pomeraj_y == 1)) return true;
		
		return false;
	}
	
	//Method checks if a piece is on the path
	proveri_putanju(novo_x, novo_y) {
		return true;
	}
	
}

class Kralj extends Figura {
	constructor(x, y, tip, boja) {
		super(x, y, tip, boja);
	}
	
	proveri_potez(novo_x, novo_y) {
		var pomeraj_x = Math.abs(novo_x - this.x);
		var pomeraj_y = Math.abs(novo_y - this.y);
		
		if ((pomeraj_x == 1 && pomeraj_y == 0) || (pomeraj_x == 0 && pomeraj_y == 1) || (pomeraj_x == 1 && pomeraj_y == 1)) return true;
		
		return false;
	}
	
	//Method checks if a piece is on the path
	proveri_putanju(novo_x, novo_y) {
		return true;
	}
	
}

class Dama extends Figura {
	constructor(x, y, tip, boja) {
		super(x, y, tip, boja);
	}
	
	proveri_potez(novo_x, novo_y) {
		var pomeraj_x = Math.abs(novo_x - this.x);
		var pomeraj_y = Math.abs(novo_y - this.y);
		
		if ((pomeraj_x == pomeraj_y) || (pomeraj_x == 0 || pomeraj_y == 0)) return true;
		
		return false;
	}
	
	//Method checks if a piece is on the path
	proveri_putanju(novo_x, novo_y) {
		var pomeraj_x = this.x - novo_x;
		var pomeraj_y = this.y - novo_y;
		
		var i = parseInt(this.x);
		var j = parseInt(this.y);
		var ne_sadrzi_figuru = true;
		
		for (;;) {
			if (pomeraj_x < 0) i = i + 1;
			else if (pomeraj_x > 0) i = i - 1;
			
			if (pomeraj_y < 0) j = j + 1;
			else if (pomeraj_y > 0) j = j - 1;
			
			if (i == novo_x && j == novo_y) break;
			
			$(".field_div").each(function() {
				if ($(this).attr("data-x") == i && $(this).attr("data-y") == j) {
					if ($(this).hasClass("player_black") || $(this).hasClass("player_white")) {
						// postoji figura na polju
						ne_sadrzi_figuru = false;
					}
					
					return;
				}
			});
			
			if (!ne_sadrzi_figuru) break;
			
			if (pomeraj_x == pomeraj_y && pomeraj_x != 0 && pomeraj_y != 0) {
				if ($(`.field_div[data-x=${i}][data-y=${j}]`).hasClass("player_black") || $(`.field_div[data-x=${i}][data-y=${j}]`).hasClass("player_white")) {
					return false;
				}
			}
			
			if ((pomeraj_x == 0 || pomeraj_y == 0) && !(pomeraj_x == 0 && pomeraj_y == 0)) {
				if ($(`.field_div[data-x=${i}][data-y=${j}]`).hasClass("player_black") || $(`.field_div[data-x=${i}][data-y=${j}]`).hasClass("player_white")) {
					return false;
				}
			}
			
			if (!ne_sadrzi_figuru) break;
			
		}
		
		return ne_sadrzi_figuru;
		
	}
	
}

class Pesak extends Figura {
    constructor(x, y, tip, boja) {
        super(x, y, tip, boja);
        // Flag to indicate the pawn hasn't moved yet.
        this.firstMove = true;
    }
    
    // Helper method: returns true if the field at (x, y) is empty.
    fieldIsEmpty(x, y) {
        let empty = true;
        $(".field_div").each(function() {
            if ($(this).attr("data-x") == x && $(this).attr("data-y") == y) {
                if ($(this).hasClass("player_black") || $(this).hasClass("player_white")) {
                    empty = false;
                }
                return;
            }
        });
        return empty;
    }
    
    proveri_potez(novo_x, novo_y) {
        novo_x = parseInt(novo_x);
        novo_y = parseInt(novo_y);
        const currentX = parseInt(this.x);
        const currentY = parseInt(this.y);
        const pomeraj_x = novo_x - currentX;
        const pomeraj_y = novo_y - currentY;
        // Determine forward direction based on pawn's color.
        const forwardDirection = this.boja === 'player_white' ? 1 : -1;
        
        // Moving straight forward (same column)
        if (pomeraj_x === 0) {
            // Regular one-square move forward.
            if (pomeraj_y === forwardDirection) {
                return this.fieldIsEmpty(currentX, currentY + forwardDirection);
            }
            // Two-square move: allowed only if it's the pawn's first move
            // and it is still on its starting row.
            else if (this.firstMove && 
                     (this.boja === 'player_white' ? currentY === 2 : currentY === 7) && 
                     pomeraj_y === 2 * forwardDirection) {
                // Both the intermediate square and the destination square must be empty.
                return this.fieldIsEmpty(currentX, currentY + forwardDirection) &&
                       this.fieldIsEmpty(currentX, currentY + 2 * forwardDirection);
            }
            return false;
        }
        // Diagonal capture: move one square diagonally forward if there is an opponent's piece.
        else if (Math.abs(pomeraj_x) === 1 && pomeraj_y === forwardDirection) {
            let targetField = null;
            $(".field_div").each(function() {
                if ($(this).attr("data-x") == novo_x && $(this).attr("data-y") == novo_y) {
                    targetField = $(this);
                    return;
                }
            });
            if (targetField && (targetField.hasClass("player_black") || targetField.hasClass("player_white"))) {
                return true;
            }
        }
        return false;
    }
    
    // For pawns, path checking is embedded in proveri_potez.
    proveri_putanju(novo_x, novo_y) {
        return true;
    }
}



$(document).ready(function () {
	var odabrana_figura = null;
	var na_potezu = "player_white";
	
	function ponistavanje_odabira() {
		$(".white_field").css("border", "2px solid transparent");
		$(".black_field").css("border", "2px solid transparent");
	}
	
	function prikazi_nedozvoljen_potez() {
		alert("nedozvoljen potez");
		odabrana_figura = null;
		ponistavanje_odabira();
	}
	
	$(".field_div").on("click", function () {
		var elem = $(this);
		
		ponistavanje_odabira();
		elem.parent().css("border", "2px solid red");
		
		if (odabrana_figura != null) {
			// a piece was selected in the previous step
			// is there a piece of the same color on this square
			if (elem.hasClass(odabrana_figura.boja)) {
				// there is a piece of the same color
				prikazi_nedozvoljen_potez();
			}
			else if (!odabrana_figura.proveri_potez(elem.attr("data-x"), elem.attr("data-y"))) {
				// the move is not valid
				prikazi_nedozvoljen_potez();
			}
			else if (!odabrana_figura.proveri_putanju(elem.attr("data-x"), elem.attr("data-y"))) {
				// a piece is on the path
				prikazi_nedozvoljen_potez();
			}
			else {
				// move the piece
				var prethodno_polje = null;
				
				$(".field_div").each(function() {
					if ($(this).attr("data-x") == odabrana_figura.x && $(this).attr("data-y") == odabrana_figura.y) {
						prethodno_polje = $(this);
						
						return;
					}
				});
				
				var figura_img = prethodno_polje.find("img");
				
				prethodno_polje.removeClass(odabrana_figura.boja).removeClass(odabrana_figura.tip);
				figura_img.remove();
				
				var stara_figura_img = elem.find("img");
				
				stara_figura_img.remove();
				elem.removeClass().addClass("field_div");
				
				elem.append(figura_img);
				elem.addClass(odabrana_figura.boja).addClass(odabrana_figura.tip);
				
				
				if (na_potezu == "player_white") na_potezu = "player_black";
				else na_potezu = "player_white";
				
				odabrana_figura = null;
				ponistavanje_odabira();
			}
		}
		else {
			// no figure selected
			// checking if there is a figure on the selected field
			NIZ_FIGURA.forEach(function (item, index) {
				if (elem.hasClass(item)) {
					// there is a figure
					// is that color's turn to play?
					if (!elem.hasClass(na_potezu)) {
						alert("nisi na potezu");
						
						return;
					}
					
					var poz_x = elem.attr("data-x");
					var poz_y = elem.attr("data-y");
					
					switch (item) {
						case "pesak":
							odabrana_figura = new Pesak(poz_x, poz_y, "pesak", na_potezu);

							break;
						case "top":
							odabrana_figura = new Top(poz_x, poz_y, "top", na_potezu);

							break;
						case "konj":
							odabrana_figura = new Konj(poz_x, poz_y, "konj", na_potezu);

							break;
						case "lovac":
							odabrana_figura = new Lovac(poz_x, poz_y, "lovac", na_potezu);

							break;
						case "kralj":
							odabrana_figura = new Kralj(poz_x, poz_y, "kralj", na_potezu);

							break;
						case "dama":
							odabrana_figura = new Dama(poz_x, poz_y, "dama", na_potezu);
	
							break;
						default:
							//
					}

					return;
				}
			});
			
			
		}
	});
	
});