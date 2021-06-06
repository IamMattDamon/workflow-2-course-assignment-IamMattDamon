import ApolloClient, { gql } from "apollo-boost";
import { orderBy } from "lodash";
import "./../styles/style.scss";

const client = new ApolloClient({
    uri: "https://countries.trevorblades.com/"
});

client.query({ query: gql`
    {
        countries {
          code
          name
          capital
        }
      }
`}).then(json => {
    const countryList = orderBy(json.data.countries, ["name"], ["desc"]);
    console.log(countryList);

    const resultsContainer = document.querySelector("div.results");
    resultsContainer.innerHTML = "";

    countryList.forEach(countries => {
        resultsContainer.innerHTML +=
                                    `
                                    <div class="container">
                                        <div class="row">
                                            <div class="column">
                                                <div class="countryCode">${countries.code}</div>
                                                <div class="countryName">${countries.name}</div>
                                                <div class="countryCapital">${countries.capital}</div>
                                            </div>    
                                        </div>
                                    </div>
                                    `;
    })
});

