describe( 'Bunch of TEST - Form', function() {

    var emptyTest = {
        name : null,
        email : null,
        cackeType : null,
        celType : null
    };
    var testFields = {
        name : 'sho',  // too Short
        email : 'test',  //missing @ char
        cackeType : null,
        celType : null
    };
    var successFields = {
        name : 'testing',  // too Short
        email : 'test@email.com',  //missing @ char
        cackeType : {
            value: 'cupcackes'
        },
        celType : {value: 0}
    };

    describe('Cacke tests - Type elements test', function() {
        var formElem = document.forms[0];
        console.log(formElem.reset)

        it('Name is type text', function() {
            expect(formElem.name.getAttribute('type')).to.equal('text');
        });
        it('Email is type email', function() {
            expect(formElem.email.getAttribute('type')).to.equal('email');
        });
        describe('Checkbox buttons', function() {
            it('checkbox_1 Type', function () {
                expect(formElem.checkbox_1.getAttribute('type')).to.equal('checkbox');
            });
            it('checkbox_2 Type', function () {
                expect(formElem.checkbox_2.getAttribute('type')).to.equal('checkbox');
            });
            it('checkbox_3 Type', function () {
                expect(formElem.checkbox_3.getAttribute('type')).to.equal('checkbox');
            });
            it('checkbox_4 Type', function () {
                expect(formElem.checkbox_4.getAttribute('type')).to.equal('checkbox');
            });
        });
        describe('Radio Buttons', function() {
            it('radio_1 Type', function() {
                expect(formElem.radio_1.getAttribute('type')).to.equal('radio');
            });
            it('radio_2 Type', function() {
                expect(formElem.radio_2.getAttribute('type')).to.equal('radio');
            });
            it('radio_3 Type', function() {
                expect(formElem.radio_3.getAttribute('type')).to.equal('radio');
            });
            it('radio_other Type', function() {
                expect(formElem.radio_other.getAttribute('type')).to.equal('radio');
            });
        });
        it('Textarea ', function() {
            expect(formElem.dream.getAttribute('type')).to.equal('textarea');
        });
        it('Submit ', function() {
            expect(formElem.submit.getAttribute('type')).to.equal('submit');
        });
        it('Reset ', function() {
            expect(formElem.reset).to.exist;
        });


    });

    describe('Cacke tests - Empty Fields', function() {
        it('Name is Empty', function() {
            expect(emptyTest.name).to.equal(null);
        });
        it('Email is Empty', function() {
            expect(emptyTest.email).to.equal(null);
        });
        it('Cacke Type is Empty', function() {
            expect(emptyTest.cackeType).to.equal(null);
        });
        it('Cel Type is Empty', function() {
            expect(emptyTest.celType).to.equal(null);
        });

    });
    describe('Cacke tests - Wrong Fields', function() {

        it('Name is too short : Fail Validation', function() {
            expect(testFields.name).to.not.have.length.above(5);
        });
        it('Email missing \'@\' char : Fail Validation', function() {
            expect(testFields.email).to.not.have.string('@');
        });
        it('Cacke Type is Empty', function() {
            expect(testFields.cackeType).to.not.exist;
        });
        it('Cel Type is Empty', function() {
            expect(testFields.celType).to.not.exist;
        });

    });
    describe('Cacke tests - Success', function() {

        it('Name VALIDATED', function() {
            expect(successFields.name).to.have.length.above(5);
        });
        it('Email VALIDATE', function() {
            expect(successFields.email).to.have.string('@');
        });
        it('Cacke Type FIND', function() {
            expect(successFields).to.include.keys('cackeType');
            expect(successFields.cackeType).to.deep.include.key('value');
        });
        it('Cel Type FIND', function() {
            expect(successFields).to.include.keys('celType');
            expect(successFields.celType).to.deep.include.key('value');
        });

    });

} );
