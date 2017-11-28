import PropTypes from 'prop-types';
import React from 'react';
import styles from './question.css';
import Input from '../forms/input.jsx';

const QuestionComponent = props => {
    const {
        answer,
        question,
        onChange,
        onClick,
        onKeyPress
    } = props;
    return (
        <div className={styles.questionWrapper}>
            <div className={styles.questionContainer}>
                {question.wasVisible ? (
                    <div className={styles.questionLabel}>{question.text}</div>
                ) : null}
                <div className={styles.questionInput}>
                    <Input
                        autoFocus
                        disabled={question.say}
                        style={question.say ? {
							fontSize: '0.75rem',
							fontWeight: 'bold',
							fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
							backgroundColor: 'white',
							color: '#575e75',
							border: 'none'
						} : null}
                        value={answer}
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                    />
                    <button
                        className={styles.questionSubmitButton}
                        onClick={onClick}
                    >
                        ✔︎
                    </button>
                </div>
            </div>
        </div>
    );
};

QuestionComponent.propTypes = {
    answer: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    onKeyPress: PropTypes.func.isRequired,
    question: PropTypes.object
};

export default QuestionComponent;
