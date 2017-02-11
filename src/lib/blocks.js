const ScratchBlocks = require('scratch-blocks');

module.exports = function (vm) {

    const jsonForMenuBlock = function (name, menuOptionsFn, colors, start) {
        return {
            message0: '%1',
            args0: [
                {
                    type: 'field_dropdown',
                    name: name,
                    options: start.concat(menuOptionsFn())
                }
            ],
            inputsInline: true,
            output: 'String',
            colour: colors.secondary,
            colourSecondary: colors.secondary,
            colourTertiary: colors.tertiary,
            outputShape: ScratchBlocks.OUTPUT_SHAPE_ROUND
        };
    };

    const soundsMenu = function () {
        return vm.editingTarget.sprite.sounds.map(sound => [sound.name, sound.name]);
    };

    const costumesMenu = function () {
        return vm.editingTarget.sprite.costumes.map(costume => [costume.name, costume.name]);
    };

    const backdropsMenu = function () {
        return vm.runtime.targets[0].sprite.costumes.map(costume => [costume.name, costume.name]);
    };
    
    const spriteMenu = function () {
        var i = 0;
        var sprites = [];
        var k = 0;
        for (i = 0; i < vm.runtime.targets.length; i++) {
            if (vm.runtime.targets[i].isOriginal === true) {
                if (vm.runtime.targets[i].isStage === false) {
                    if (vm.runtime.targets[i].sprite.name === vm.editingTarget.sprite.name) {
                        continue;
                    }
                    sprites[k] = [];
                    sprites[k][0] = vm.runtime.targets[i].sprite.name;
                    sprites[k][1] = vm.runtime.targets[i].sprite.name;
                    k++;
                }
            }
        }
        return sprites;
    };

    const soundColors = ScratchBlocks.Colours.sounds;

    const looksColors = ScratchBlocks.Colours.looks;
    
    const motionColors = ScratchBlocks.Colours.motion;
    
    const sensingColors = ScratchBlocks.Colours.sensing;
    
    const controlColors = ScratchBlocks.Colours.control;

    ScratchBlocks.Blocks.sound_sounds_menu.init = function () {
        const json = jsonForMenuBlock('SOUND_MENU', soundsMenu, soundColors, []);
        this.jsonInit(json);
    };

    ScratchBlocks.Blocks.looks_costume.init = function () {
        const json = jsonForMenuBlock('COSTUME', costumesMenu, looksColors, []);
        this.jsonInit(json);
    };

    ScratchBlocks.Blocks.looks_backdrops.init = function () {
        const json = jsonForMenuBlock('BACKDROP', backdropsMenu, looksColors, []);
        this.jsonInit(json);
    };
    
    ScratchBlocks.Blocks.motion_pointtowards_menu.init = function () {
        const json = jsonForMenuBlock('TOWARDS', spriteMenu, motionColors, [
            ['mouse-pointer', '_mouse_']
        ]);
        this.jsonInit(json);
    };
    
    ScratchBlocks.Blocks.motion_goto_menu.init = function () {
        const json = jsonForMenuBlock('TO', spriteMenu, motionColors, [
            ['mouse-pointer', '_mouse_'],
            ['random position', '_random_']
        ]);
        this.jsonInit(json);
    };
    
    ScratchBlocks.Blocks.sensing_of_object_menu.init = function () {
        const json = jsonForMenuBlock('OBJECT', spriteMenu, sensingColors, [
            ['Stage', '_stage_']
        ]);
        this.jsonInit(json);
    };
    
    ScratchBlocks.Blocks.sensing_videoonmenutwo.init = function () {
        const json = jsonForMenuBlock('VIDEOONMENU2', spriteMenu, sensingColors, [
            ['stage', 'STAGE']
        ]);
        this.jsonInit(json);
    };
    
    ScratchBlocks.Blocks.sensing_distancetomenu.init = function () {
        const json = jsonForMenuBlock('DISTANCETOMENU', spriteMenu, sensingColors, [
            ['mouse-pointer', '_mouse_']
        ]);
        this.jsonInit(json);
    };
    
    ScratchBlocks.Blocks.sensing_touchingobjectmenu.init = function () {
        const json = jsonForMenuBlock('TOUCHINGOBJECTMENU', spriteMenu, sensingColors, [
            ['mouse-pointer', '_mouse_'],
            ['edge', '_edge_']
        ]);
        this.jsonInit(json);
    };
    
    ScratchBlocks.Blocks.control_create_clone_of_menu.init = function () {
        const json = jsonForMenuBlock('CLONE_OPTION', spriteMenu, controlColors, [
            ['myself', '_myself_']
        ]);
        this.jsonInit(json);
    };

    return ScratchBlocks;
};
