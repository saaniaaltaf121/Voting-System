let addCandidateBtn = document.getElementById("addCandidateBtn");
        let candidateInput = document.getElementById("candidateInput");
        let candidates = ["Sehrish", "Sharmeen", "Saania", "Muzammil", "Anaya"];

        addCandidateBtn.addEventListener("click", () => {
            candidates.push(candidateInput.value);
            candidateInput.value = "";
            displayCandidates();
        });

        function displayCandidates() {
            var candidatesTable = document.getElementById("candidatesTable");
            candidatesTable.innerHTML = "";

            candidates.forEach((candidate, index) => {
                var row = document.createElement("ul");

                var nameCell = document.createElement("li");
                nameCell.textContent = candidate;

                var indexCell = document.createElement("ul");
                indexCell.textContent = index + 1;

                var voteCell = document.createElement("li");
                voteCell.textContent = 0;

                row.appendChild(indexCell);
                row.appendChild(nameCell);
                row.appendChild(voteCell);

                row.addEventListener("click", () => {
                    voteCell.innerHTML++;
                });

                candidatesTable.appendChild(row);
            });
        }

        displayCandidates();