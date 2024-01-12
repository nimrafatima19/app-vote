let addCandidateBtn = document.getElementById("addCandidateBtn");
        let candidateInput = document.getElementById("candidateInput");
        let candidates = [
            { name: " Muslim League(N)", image: "images/pmln.png" },
            { name: " PPP", image: "images/ppp.png" },
            { name: " PML(N)", image: "path/to/abdullah.jpg" },
            { name: "PTI", image: "path/to/anas.jpg" },
            { name: "MQM", image: "path/to/arshad.jpg" }
        ];

        addCandidateBtn .addEventListener("click", () => {
            candidates.push({ name: candidateInput.value, image: "images/vote4.jpg" });
            candidateInput.value = "";
            displayCandidates();
        });

        function displayCandidates() {
            var candidatesTable = document.getElementById("candidatesTable");
            candidatesTable.innerHTML = "";

            candidates.forEach((candidate, index) => {
                var row = document.createElement("tr");

                var imageCell = document.createElement("td");
                var img = document.createElement("img");
                img.src = candidate.image;
                img.alt = candidate.name;
                img.width = 50; // Set the width as needed
                imageCell.appendChild(img);

                var nameCell = document.createElement("td");
                nameCell.textContent = candidate.name;

                var indexCell = document.createElement("td");
                indexCell.textContent = index + 1;

                var voteCell = document.createElement("td");
                voteCell.textContent = 0;

                row.appendChild(indexCell);
                row.appendChild(imageCell);
                row.appendChild(nameCell);
                row.appendChild(voteCell);

                row.addEventListener("click", () => {
                    voteCell.innerHTML++;
                });

                candidatesTable.appendChild(row);
            });
        }

        displayCandidates();