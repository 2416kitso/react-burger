import React, { Component} from 'react';
import './BurgerStyle.css';

interface BurgerState {
    lettuce: number;
    tomato: number;
    cheese: number;
    meat: number;
}

export default class Burger extends Component<{}, BurgerState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            lettuce: 0,
            tomato: 0,
            cheese: 0,
            meat: 0,
        };
    }

    addRemoveIngredient = (action: 'add' | 'remove', ingredient: keyof BurgerState) => {
        const { lettuce, tomato, cheese, meat } = this.state;

        let stateValue = 0;
        switch (ingredient) {
            case 'lettuce':
                stateValue = lettuce;
                break;
            case 'tomato':
                stateValue = tomato;
                break;
            case 'cheese':
                stateValue = cheese;
                break;
            case 'meat':
                stateValue = meat;
                break;
            default:
                break;
        }

        if (action === 'add') {
            stateValue = stateValue + 1;
        } else {
            stateValue = stateValue - 1;
        }

        this.setState({
            [ingredient]: stateValue >= 0 ? stateValue : 0,
        } as Pick<BurgerState, keyof BurgerState>);
        
       
    };

    burgerContent = () => {
        const { lettuce, tomato, cheese, meat } = this.state;
        const burger: JSX.Element[] = [];

        // outputting the lettuce
        for (let i = 0; i < lettuce; i++) {
            burger.push(<div key={burger.length} className="lettuseSide"></div>);
        }
        // outputting the tomato
        for (let i = 0; i < tomato; i++) {
            burger.push(<div key={burger.length} className="tomatoSide"></div>);
        }
        // outputting the cheese
        for (let i = 0; i < cheese; i++) {
            burger.push(<div key={burger.length} className="cheeseSide"></div>);
        }
        // outputting the meat
        for (let i = 0; i < meat; i++) {
            burger.push(<div key={burger.length} className="meatSide"></div>);
        }
        if (burger.length === 0) burger.push(<p key="0">Add Your ingredients!</p>);
        return burger;
    };

    render() {
        return (
            <>
                <div className="burgerIngredients">
                    <div className="topSide"></div>
                    {this.burgerContent()}
                    <div className="bottomSide"></div>
                </div>
                <div className="ingredientsBlock">
                    <p>Lettuce</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add', 'lettuce')}>
                            Add
                        </button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove', 'lettuce')}>
                            Remove
                        </button>
                    </div>
                    <p>TOMATO</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add', 'tomato')}>
                            Add
                        </button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove', 'tomato')}>
                            Remove
                        </button>
                    </div>
                    <p>CHEESE</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add', 'cheese')}>
                            Add
                        </button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove', 'cheese')}>
                            Remove
                        </button>
                    </div>
                    <p>MEAT</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add', 'meat')}>
                            Add
                        </button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove', 'meat')}>
                            Remove
                        </button>
                    </div>
                </div>
            </>
        );
    }
}
