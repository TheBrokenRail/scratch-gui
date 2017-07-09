const PropTypes = require('prop-types');
const React = require('react');
const bindAll = require('lodash.bindall');
const AssetDeleteComponent = require('../components/prompt/asset-delete.jsx');

class AssetDelete extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleOk',
            'handleCancel'
        ]);
    }
    handleOk () {
        this.props.onOk();
    }
    handleCancel () {
        this.props.onCancel();
    }
    render () {
        return (
            <AssetDeleteComponent
                assetName={this.props.assetName}
                assetURL={this.props.assetURL}
                label={this.props.label}
                title={this.props.title}
                onCancel={this.handleCancel}
                onOk={this.handleOk}
            />
        );
    }
}

AssetDelete.propTypes = {
    assetName: PropTypes.string.isRequired,
    assetURL: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
    onOk: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
};

module.exports = AssetDelete;