function domainType(domains) {
    let guide = {
        org: "organization",
        com: "commercial",
        net: "network",
        info: "information"
    }
    
    return domains.map((el, i, a, x=el.split(".")) => guide[x[x.length-1]])  
}

//Test Suite
describe('domainType()', () => {
    it('returns list of domain types', () => {
        const domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"];
        const result = domainType(domains);
        console.log("result: ", result);
        expect(result).toEqual(["organization", "commercial", "network", "information"]);
    });
});